
import { useEffect, useState, useMemo } from "react";
import _ from "lodash";
import { useQuery } from "@tanstack/react-query";
import { queuesUtil5, QUEUES_PREFIX_5 } from "../utils/queues-util-5";
import { useShared5 } from "../../../shared/hooks/use-shared-5";
export function useQueues4(input) {
  const [items, setItems] = useState([]);
  const { data } = useQuery({ queryKey: ["queues", 4, input], queryFn: async () => [] });
  const shared = useShared5(input);
  const keyed = useMemo(() => queuesUtil5(items, "id"), [items]);
  useEffect(() => { if (data) setItems(data); }, [data]);
  return { items, keyed, shared, prefix: QUEUES_PREFIX_5 };
}
