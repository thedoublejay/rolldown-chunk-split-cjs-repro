
import { useEffect, useState, useMemo } from "react";
import _ from "lodash";
import { useQuery } from "@tanstack/react-query";
import { analyticsUtil5, ANALYTICS_PREFIX_5 } from "../utils/analytics-util-5";
import { useShared5 } from "../../../shared/hooks/use-shared-5";
export function useAnalytics4(input) {
  const [items, setItems] = useState([]);
  const { data } = useQuery({ queryKey: ["analytics", 4, input], queryFn: async () => [] });
  const shared = useShared5(input);
  const keyed = useMemo(() => analyticsUtil5(items, "id"), [items]);
  useEffect(() => { if (data) setItems(data); }, [data]);
  return { items, keyed, shared, prefix: ANALYTICS_PREFIX_5 };
}
