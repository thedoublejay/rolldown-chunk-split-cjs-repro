
import { useEffect, useState, useMemo } from "react";
import _ from "lodash";
import { useQuery } from "@tanstack/react-query";
import { metricsUtil5, METRICS_PREFIX_5 } from "../utils/metrics-util-5";
import { useShared5 } from "../../../shared/hooks/use-shared-5";
export function useMetrics4(input) {
  const [items, setItems] = useState([]);
  const { data } = useQuery({ queryKey: ["metrics", 4, input], queryFn: async () => [] });
  const shared = useShared5(input);
  const keyed = useMemo(() => metricsUtil5(items, "id"), [items]);
  useEffect(() => { if (data) setItems(data); }, [data]);
  return { items, keyed, shared, prefix: METRICS_PREFIX_5 };
}
