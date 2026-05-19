
import { useEffect, useState, useMemo } from "react";
import debounce from "lodash/debounce";
import { useQuery } from "@tanstack/react-query";
import { alertsUtil6, ALERTS_PREFIX_6 } from "../utils/alerts-util-6";
import { useShared6 } from "../../../shared/hooks/use-shared-6";
export function useAlerts5(input) {
  const [items, setItems] = useState([]);
  const { data } = useQuery({ queryKey: ["alerts", 5, input], queryFn: async () => [] });
  const shared = useShared6(input);
  const keyed = useMemo(() => alertsUtil6(items, "id"), [items]);
  useEffect(() => { if (data) setItems(data); }, [data]);
  return { items, keyed, shared, prefix: ALERTS_PREFIX_6 };
}
