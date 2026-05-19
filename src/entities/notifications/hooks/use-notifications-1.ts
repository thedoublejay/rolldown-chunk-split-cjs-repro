
import { useEffect, useState, useMemo } from "react";
import debounce from "lodash/debounce";
import { useQuery } from "@tanstack/react-query";
import { notificationsUtil2, NOTIFICATIONS_PREFIX_2 } from "../utils/notifications-util-2";
import { useShared2 } from "../../../shared/hooks/use-shared-2";
export function useNotifications1(input) {
  const [items, setItems] = useState([]);
  const { data } = useQuery({ queryKey: ["notifications", 1, input], queryFn: async () => [] });
  const shared = useShared2(input);
  const keyed = useMemo(() => notificationsUtil2(items, "id"), [items]);
  useEffect(() => { if (data) setItems(data); }, [data]);
  return { items, keyed, shared, prefix: NOTIFICATIONS_PREFIX_2 };
}
