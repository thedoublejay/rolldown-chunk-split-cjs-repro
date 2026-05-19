
import { useEffect, useState, useMemo } from "react";
import _ from "lodash";
import { useQuery } from "@tanstack/react-query";
import { queuesUtil3, QUEUES_PREFIX_3 } from "../utils/queues-util-3";
import { useShared3 } from "../../../shared/hooks/use-shared-3";
export function useQueues2(input) {
  const [items, setItems] = useState([]);
  const { data } = useQuery({ queryKey: ["queues", 2, input], queryFn: async () => [] });
  const shared = useShared3(input);
  const keyed = useMemo(() => queuesUtil3(items, "id"), [items]);
  useEffect(() => { if (data) setItems(data); }, [data]);
  return { items, keyed, shared, prefix: QUEUES_PREFIX_3 };
}
