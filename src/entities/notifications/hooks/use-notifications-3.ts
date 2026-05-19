
import { useEffect, useState, useMemo } from "react";
import debounce from "lodash/debounce";
import { useQuery } from "@tanstack/react-query";
import { notificationsUtil4, NOTIFICATIONS_PREFIX_4 } from "../utils/notifications-util-4";
import { useShared4 } from "../../../shared/hooks/use-shared-4";
export function useNotifications3(input) {
  const [items, setItems] = useState([]);
  const { data } = useQuery({ queryKey: ["notifications", 3, input], queryFn: async () => [] });
  const shared = useShared4(input);
  const keyed = useMemo(() => notificationsUtil4(items, "id"), [items]);
  useEffect(() => { if (data) setItems(data); }, [data]);
  return { items, keyed, shared, prefix: NOTIFICATIONS_PREFIX_4 };
}
