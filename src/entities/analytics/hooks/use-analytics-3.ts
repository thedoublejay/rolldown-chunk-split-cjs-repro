
import { useEffect, useState, useMemo } from "react";
import debounce from "lodash/debounce";
import { useQuery } from "@tanstack/react-query";
import { analyticsUtil4, ANALYTICS_PREFIX_4 } from "../utils/analytics-util-4";
import { useShared4 } from "../../../shared/hooks/use-shared-4";
export function useAnalytics3(input) {
  const [items, setItems] = useState([]);
  const { data } = useQuery({ queryKey: ["analytics", 3, input], queryFn: async () => [] });
  const shared = useShared4(input);
  const keyed = useMemo(() => analyticsUtil4(items, "id"), [items]);
  useEffect(() => { if (data) setItems(data); }, [data]);
  return { items, keyed, shared, prefix: ANALYTICS_PREFIX_4 };
}
