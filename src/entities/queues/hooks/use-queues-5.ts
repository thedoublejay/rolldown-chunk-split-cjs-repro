
import { useEffect, useState, useMemo } from "react";
import debounce from "lodash/debounce";
import { useQuery } from "@tanstack/react-query";
import { queuesUtil6, QUEUES_PREFIX_6 } from "../utils/queues-util-6";
import { useShared6 } from "../../../shared/hooks/use-shared-6";
export function useQueues5(input) {
  const [items, setItems] = useState([]);
  const { data } = useQuery({ queryKey: ["queues", 5, input], queryFn: async () => [] });
  const shared = useShared6(input);
  const keyed = useMemo(() => queuesUtil6(items, "id"), [items]);
  useEffect(() => { if (data) setItems(data); }, [data]);
  return { items, keyed, shared, prefix: QUEUES_PREFIX_6 };
}
