
import { useEffect, useState, useMemo } from "react";
import debounce from "lodash/debounce";
import { useQuery } from "@tanstack/react-query";
import { metricsUtil4, METRICS_PREFIX_4 } from "../utils/metrics-util-4";
import { useShared4 } from "../../../shared/hooks/use-shared-4";
export function useMetrics3(input) {
  const [items, setItems] = useState([]);
  const { data } = useQuery({ queryKey: ["metrics", 3, input], queryFn: async () => [] });
  const shared = useShared4(input);
  const keyed = useMemo(() => metricsUtil4(items, "id"), [items]);
  useEffect(() => { if (data) setItems(data); }, [data]);
  return { items, keyed, shared, prefix: METRICS_PREFIX_4 };
}
