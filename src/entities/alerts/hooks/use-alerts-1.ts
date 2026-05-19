
import { useEffect, useState, useMemo } from "react";
import debounce from "lodash/debounce";
import { useQuery } from "@tanstack/react-query";
import { alertsUtil2, ALERTS_PREFIX_2 } from "../utils/alerts-util-2";
import { useShared2 } from "../../../shared/hooks/use-shared-2";
export function useAlerts1(input) {
  const [items, setItems] = useState([]);
  const { data } = useQuery({ queryKey: ["alerts", 1, input], queryFn: async () => [] });
  const shared = useShared2(input);
  const keyed = useMemo(() => alertsUtil2(items, "id"), [items]);
  useEffect(() => { if (data) setItems(data); }, [data]);
  return { items, keyed, shared, prefix: ALERTS_PREFIX_2 };
}
