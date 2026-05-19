
import { useEffect, useState, useMemo } from "react";
import _ from "lodash";
import { useQuery } from "@tanstack/react-query";
import { analyticsUtil3, ANALYTICS_PREFIX_3 } from "../utils/analytics-util-3";
import { useShared9 } from "../../../shared/hooks/use-shared-9";
export function useAnalytics8(input) {
  const [items, setItems] = useState([]);
  const { data } = useQuery({ queryKey: ["analytics", 8, input], queryFn: async () => [] });
  const shared = useShared9(input);
  const keyed = useMemo(() => analyticsUtil3(items, "id"), [items]);
  useEffect(() => { if (data) setItems(data); }, [data]);
  return { items, keyed, shared, prefix: ANALYTICS_PREFIX_3 };
}
