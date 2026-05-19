
import { useEffect, useState, useMemo } from "react";
import debounce from "lodash/debounce";
import { useQuery } from "@tanstack/react-query";
import { analyticsUtil2, ANALYTICS_PREFIX_2 } from "../utils/analytics-util-2";
import { useShared2 } from "../../../shared/hooks/use-shared-2";
export function useAnalytics1(input) {
  const [items, setItems] = useState([]);
  const { data } = useQuery({ queryKey: ["analytics", 1, input], queryFn: async () => [] });
  const shared = useShared2(input);
  const keyed = useMemo(() => analyticsUtil2(items, "id"), [items]);
  useEffect(() => { if (data) setItems(data); }, [data]);
  return { items, keyed, shared, prefix: ANALYTICS_PREFIX_2 };
}
