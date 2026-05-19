
import { useEffect, useState, useMemo } from "react";
import debounce from "lodash/debounce";
import { useQuery } from "@tanstack/react-query";
import { dashboardUtil4, DASHBOARD_PREFIX_4 } from "../utils/dashboard-util-4";
import { useShared4 } from "../../../shared/hooks/use-shared-4";
export function useDashboard3(input) {
  const [items, setItems] = useState([]);
  const { data } = useQuery({ queryKey: ["dashboard", 3, input], queryFn: async () => [] });
  const shared = useShared4(input);
  const keyed = useMemo(() => dashboardUtil4(items, "id"), [items]);
  useEffect(() => { if (data) setItems(data); }, [data]);
  return { items, keyed, shared, prefix: DASHBOARD_PREFIX_4 };
}
