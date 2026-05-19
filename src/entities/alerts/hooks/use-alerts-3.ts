
import { useEffect, useState, useMemo } from "react";
import debounce from "lodash/debounce";
import { useQuery } from "@tanstack/react-query";
import { alertsUtil4, ALERTS_PREFIX_4 } from "../utils/alerts-util-4";
import { useShared4 } from "../../../shared/hooks/use-shared-4";
export function useAlerts3(input) {
  const [items, setItems] = useState([]);
  const { data } = useQuery({ queryKey: ["alerts", 3, input], queryFn: async () => [] });
  const shared = useShared4(input);
  const keyed = useMemo(() => alertsUtil4(items, "id"), [items]);
  useEffect(() => { if (data) setItems(data); }, [data]);
  return { items, keyed, shared, prefix: ALERTS_PREFIX_4 };
}
