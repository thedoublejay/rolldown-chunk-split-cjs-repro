
import { useEffect, useState, useMemo } from "react";
import debounce from "lodash/debounce";
import { useQuery } from "@tanstack/react-query";
import { queuesUtil4, QUEUES_PREFIX_4 } from "../utils/queues-util-4";
import { useShared4 } from "../../../shared/hooks/use-shared-4";
export function useQueues3(input) {
  const [items, setItems] = useState([]);
  const { data } = useQuery({ queryKey: ["queues", 3, input], queryFn: async () => [] });
  const shared = useShared4(input);
  const keyed = useMemo(() => queuesUtil4(items, "id"), [items]);
  useEffect(() => { if (data) setItems(data); }, [data]);
  return { items, keyed, shared, prefix: QUEUES_PREFIX_4 };
}
