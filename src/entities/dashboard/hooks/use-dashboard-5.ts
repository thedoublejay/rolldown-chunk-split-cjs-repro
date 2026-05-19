
import { useEffect, useState, useMemo } from "react";
import debounce from "lodash/debounce";
import { useQuery } from "@tanstack/react-query";
import { dashboardUtil6, DASHBOARD_PREFIX_6 } from "../utils/dashboard-util-6";
import { useShared6 } from "../../../shared/hooks/use-shared-6";
export function useDashboard5(input) {
  const [items, setItems] = useState([]);
  const { data } = useQuery({ queryKey: ["dashboard", 5, input], queryFn: async () => [] });
  const shared = useShared6(input);
  const keyed = useMemo(() => dashboardUtil6(items, "id"), [items]);
  useEffect(() => { if (data) setItems(data); }, [data]);
  return { items, keyed, shared, prefix: DASHBOARD_PREFIX_6 };
}
