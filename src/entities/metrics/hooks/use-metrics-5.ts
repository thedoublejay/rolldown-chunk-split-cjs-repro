
import { useEffect, useState, useMemo } from "react";
import debounce from "lodash/debounce";
import { useQuery } from "@tanstack/react-query";
import { metricsUtil6, METRICS_PREFIX_6 } from "../utils/metrics-util-6";
import { useShared6 } from "../../../shared/hooks/use-shared-6";
export function useMetrics5(input) {
  const [items, setItems] = useState([]);
  const { data } = useQuery({ queryKey: ["metrics", 5, input], queryFn: async () => [] });
  const shared = useShared6(input);
  const keyed = useMemo(() => metricsUtil6(items, "id"), [items]);
  useEffect(() => { if (data) setItems(data); }, [data]);
  return { items, keyed, shared, prefix: METRICS_PREFIX_6 };
}
