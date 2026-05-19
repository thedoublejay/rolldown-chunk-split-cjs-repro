
import { useEffect, useState, useMemo } from "react";
import _ from "lodash";
import { useQuery } from "@tanstack/react-query";
import { dashboardUtil3, DASHBOARD_PREFIX_3 } from "../utils/dashboard-util-3";
import { useShared9 } from "../../../shared/hooks/use-shared-9";
export function useDashboard8(input) {
  const [items, setItems] = useState([]);
  const { data } = useQuery({ queryKey: ["dashboard", 8, input], queryFn: async () => [] });
  const shared = useShared9(input);
  const keyed = useMemo(() => dashboardUtil3(items, "id"), [items]);
  useEffect(() => { if (data) setItems(data); }, [data]);
  return { items, keyed, shared, prefix: DASHBOARD_PREFIX_3 };
}
