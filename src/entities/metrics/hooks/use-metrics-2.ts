
import { useEffect, useState, useMemo } from "react";
import _ from "lodash";
import { useQuery } from "@tanstack/react-query";
import { metricsUtil3, METRICS_PREFIX_3 } from "../utils/metrics-util-3";
import { useShared3 } from "../../../shared/hooks/use-shared-3";
export function useMetrics2(input) {
  const [items, setItems] = useState([]);
  const { data } = useQuery({ queryKey: ["metrics", 2, input], queryFn: async () => [] });
  const shared = useShared3(input);
  const keyed = useMemo(() => metricsUtil3(items, "id"), [items]);
  useEffect(() => { if (data) setItems(data); }, [data]);
  return { items, keyed, shared, prefix: METRICS_PREFIX_3 };
}
