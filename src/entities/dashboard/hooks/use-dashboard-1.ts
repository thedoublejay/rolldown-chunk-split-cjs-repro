
import { useEffect, useState, useMemo } from "react";
import debounce from "lodash/debounce";
import { useQuery } from "@tanstack/react-query";
import { dashboardUtil2, DASHBOARD_PREFIX_2 } from "../utils/dashboard-util-2";
import { useShared2 } from "../../../shared/hooks/use-shared-2";
export function useDashboard1(input) {
  const [items, setItems] = useState([]);
  const { data } = useQuery({ queryKey: ["dashboard", 1, input], queryFn: async () => [] });
  const shared = useShared2(input);
  const keyed = useMemo(() => dashboardUtil2(items, "id"), [items]);
  useEffect(() => { if (data) setItems(data); }, [data]);
  return { items, keyed, shared, prefix: DASHBOARD_PREFIX_2 };
}
