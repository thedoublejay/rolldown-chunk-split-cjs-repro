
import { useEffect, useState, useMemo } from "react";
import debounce from "lodash/debounce";
import { useQuery } from "@tanstack/react-query";
import { alertsUtil2, ALERTS_PREFIX_2 } from "../utils/alerts-util-2";
import { useShared8 } from "../../../shared/hooks/use-shared-8";
export function useAlerts7(input) {
  const [items, setItems] = useState([]);
  const { data } = useQuery({ queryKey: ["alerts", 7, input], queryFn: async () => [] });
  const shared = useShared8(input);
  const keyed = useMemo(() => alertsUtil2(items, "id"), [items]);
  useEffect(() => { if (data) setItems(data); }, [data]);
  return { items, keyed, shared, prefix: ALERTS_PREFIX_2 };
}
