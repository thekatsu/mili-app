import { useEffect, useState } from "react";
import { Collection, Model } from "@nozbe/watermelondb";
import { Subscription } from "rxjs";
import { descend, prop, sortWith, sortBy } from "ramda";

export function useObserver<T extends Model>(
  collection: Collection<T>
): [boolean, T[]] {
  const [data, setData] = useState<{ [id: string]: T }>({});
  const [isLoading, setIsLoading] = useState(true);

  /* @ts-ignore */
  const sortByCreatedAtDesc = sortWith<T>([descend(prop("createdAt"))]);
  // const sortByCreatedAtAsc = sortBy(prop('createdAt'), data)

  useEffect(() => {
    setIsLoading(true);
    const tableObserver = collection.query().observe();
    const rowsSubscriptions: { [id: string]: Subscription } = {};

    const tableSubscription = tableObserver.subscribe((tableRows) => {
      tableRows.forEach((row) => {
        if (!(row.id in rowsSubscriptions)) {
          rowsSubscriptions[row.id] = row.observe().subscribe((newValue) => {
            setData((prev) => {
              prev[row.id] = newValue;
              return { ...prev };
            });
          });
        }
      });
    });

    const unsubscribe = () => {
      for (const id in rowsSubscriptions) {
        rowsSubscriptions[id].unsubscribe();
      }
      tableSubscription.unsubscribe();
    };

    setIsLoading(false);
    return () => unsubscribe();
  }, [collection]);

  return [isLoading, sortByCreatedAtDesc(Object.values(data))];
}
