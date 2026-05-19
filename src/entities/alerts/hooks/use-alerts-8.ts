
import { useEffect, useState, useMemo } from "react";
import _ from "lodash";
import { useQuery } from "@tanstack/react-query";
import { alertsUtil3, ALERTS_PREFIX_3 } from "../utils/alerts-util-3";
import { useShared9 } from "../../../shared/hooks/use-shared-9";
export function useAlerts8(input) {
  const [items, setItems] = useState([]);
  const { data } = useQuery({ queryKey: ["alerts", 8, input], queryFn: async () => [] });
  const shared = useShared9(input);
  const keyed = useMemo(() => alertsUtil3(items, "id"), [items]);
  useEffect(() => { if (data) setItems(data); }, [data]);
  return { items, keyed, shared, prefix: ALERTS_PREFIX_3 };
}
