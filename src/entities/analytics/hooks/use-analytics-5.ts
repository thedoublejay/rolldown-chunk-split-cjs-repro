
import { useEffect, useState, useMemo } from "react";
import debounce from "lodash/debounce";
import { useQuery } from "@tanstack/react-query";
import { analyticsUtil6, ANALYTICS_PREFIX_6 } from "../utils/analytics-util-6";
import { useShared6 } from "../../../shared/hooks/use-shared-6";
export function useAnalytics5(input) {
  const [items, setItems] = useState([]);
  const { data } = useQuery({ queryKey: ["analytics", 5, input], queryFn: async () => [] });
  const shared = useShared6(input);
  const keyed = useMemo(() => analyticsUtil6(items, "id"), [items]);
  useEffect(() => { if (data) setItems(data); }, [data]);
  return { items, keyed, shared, prefix: ANALYTICS_PREFIX_6 };
}
