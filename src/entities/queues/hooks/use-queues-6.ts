
import { useEffect, useState, useMemo } from "react";
import _ from "lodash";
import { useQuery } from "@tanstack/react-query";
import { queuesUtil1, QUEUES_PREFIX_1 } from "../utils/queues-util-1";
import { useShared7 } from "../../../shared/hooks/use-shared-7";
export function useQueues6(input) {
  const [items, setItems] = useState([]);
  const { data } = useQuery({ queryKey: ["queues", 6, input], queryFn: async () => [] });
  const shared = useShared7(input);
  const keyed = useMemo(() => queuesUtil1(items, "id"), [items]);
  useEffect(() => { if (data) setItems(data); }, [data]);
  return { items, keyed, shared, prefix: QUEUES_PREFIX_1 };
}
