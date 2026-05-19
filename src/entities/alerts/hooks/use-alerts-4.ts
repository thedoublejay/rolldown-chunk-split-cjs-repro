
import { useEffect, useState, useMemo } from "react";
import _ from "lodash";
import { useQuery } from "@tanstack/react-query";
import { alertsUtil5, ALERTS_PREFIX_5 } from "../utils/alerts-util-5";
import { useShared5 } from "../../../shared/hooks/use-shared-5";
export function useAlerts4(input) {
  const [items, setItems] = useState([]);
  const { data } = useQuery({ queryKey: ["alerts", 4, input], queryFn: async () => [] });
  const shared = useShared5(input);
  const keyed = useMemo(() => alertsUtil5(items, "id"), [items]);
  useEffect(() => { if (data) setItems(data); }, [data]);
  return { items, keyed, shared, prefix: ALERTS_PREFIX_5 };
}
