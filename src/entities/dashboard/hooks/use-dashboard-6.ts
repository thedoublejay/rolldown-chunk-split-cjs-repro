
import { useEffect, useState, useMemo } from "react";
import _ from "lodash";
import { useQuery } from "@tanstack/react-query";
import { dashboardUtil1, DASHBOARD_PREFIX_1 } from "../utils/dashboard-util-1";
import { useShared7 } from "../../../shared/hooks/use-shared-7";
export function useDashboard6(input) {
  const [items, setItems] = useState([]);
  const { data } = useQuery({ queryKey: ["dashboard", 6, input], queryFn: async () => [] });
  const shared = useShared7(input);
  const keyed = useMemo(() => dashboardUtil1(items, "id"), [items]);
  useEffect(() => { if (data) setItems(data); }, [data]);
  return { items, keyed, shared, prefix: DASHBOARD_PREFIX_1 };
}
