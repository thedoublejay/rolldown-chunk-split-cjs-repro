
import { useEffect, useState, useMemo } from "react";
import _ from "lodash";
import { useQuery } from "@tanstack/react-query";
import { analyticsUtil1, ANALYTICS_PREFIX_1 } from "../utils/analytics-util-1";
import { useShared7 } from "../../../shared/hooks/use-shared-7";
export function useAnalytics6(input) {
  const [items, setItems] = useState([]);
  const { data } = useQuery({ queryKey: ["analytics", 6, input], queryFn: async () => [] });
  const shared = useShared7(input);
  const keyed = useMemo(() => analyticsUtil1(items, "id"), [items]);
  useEffect(() => { if (data) setItems(data); }, [data]);
  return { items, keyed, shared, prefix: ANALYTICS_PREFIX_1 };
}
