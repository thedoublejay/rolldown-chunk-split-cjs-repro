
import { useEffect, useState, useMemo } from "react";
import _ from "lodash";
import { useQuery } from "@tanstack/react-query";
import { dashboardUtil5, DASHBOARD_PREFIX_5 } from "../utils/dashboard-util-5";
import { useShared5 } from "../../../shared/hooks/use-shared-5";
export function useDashboard4(input) {
  const [items, setItems] = useState([]);
  const { data } = useQuery({ queryKey: ["dashboard", 4, input], queryFn: async () => [] });
  const shared = useShared5(input);
  const keyed = useMemo(() => dashboardUtil5(items, "id"), [items]);
  useEffect(() => { if (data) setItems(data); }, [data]);
  return { items, keyed, shared, prefix: DASHBOARD_PREFIX_5 };
}
