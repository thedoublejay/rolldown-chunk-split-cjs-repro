
import { useEffect, useState, useMemo } from "react";
import _ from "lodash";
import { useQuery } from "@tanstack/react-query";
import { alertsUtil1, ALERTS_PREFIX_1 } from "../utils/alerts-util-1";
import { useShared7 } from "../../../shared/hooks/use-shared-7";
export function useAlerts6(input) {
  const [items, setItems] = useState([]);
  const { data } = useQuery({ queryKey: ["alerts", 6, input], queryFn: async () => [] });
  const shared = useShared7(input);
  const keyed = useMemo(() => alertsUtil1(items, "id"), [items]);
  useEffect(() => { if (data) setItems(data); }, [data]);
  return { items, keyed, shared, prefix: ALERTS_PREFIX_1 };
}
