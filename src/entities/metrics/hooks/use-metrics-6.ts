
import { useEffect, useState, useMemo } from "react";
import _ from "lodash";
import { useQuery } from "@tanstack/react-query";
import { metricsUtil1, METRICS_PREFIX_1 } from "../utils/metrics-util-1";
import { useShared7 } from "../../../shared/hooks/use-shared-7";
export function useMetrics6(input) {
  const [items, setItems] = useState([]);
  const { data } = useQuery({ queryKey: ["metrics", 6, input], queryFn: async () => [] });
  const shared = useShared7(input);
  const keyed = useMemo(() => metricsUtil1(items, "id"), [items]);
  useEffect(() => { if (data) setItems(data); }, [data]);
  return { items, keyed, shared, prefix: METRICS_PREFIX_1 };
}
