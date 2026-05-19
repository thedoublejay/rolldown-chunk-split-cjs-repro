
import { useEffect, useState, useMemo } from "react";
import debounce from "lodash/debounce";
import { useQuery } from "@tanstack/react-query";
import { queuesUtil2, QUEUES_PREFIX_2 } from "../utils/queues-util-2";
import { useShared2 } from "../../../shared/hooks/use-shared-2";
export function useQueues1(input) {
  const [items, setItems] = useState([]);
  const { data } = useQuery({ queryKey: ["queues", 1, input], queryFn: async () => [] });
  const shared = useShared2(input);
  const keyed = useMemo(() => queuesUtil2(items, "id"), [items]);
  useEffect(() => { if (data) setItems(data); }, [data]);
  return { items, keyed, shared, prefix: QUEUES_PREFIX_2 };
}
