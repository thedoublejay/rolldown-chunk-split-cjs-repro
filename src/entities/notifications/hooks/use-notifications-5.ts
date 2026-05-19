
import { useEffect, useState, useMemo } from "react";
import debounce from "lodash/debounce";
import { useQuery } from "@tanstack/react-query";
import { notificationsUtil6, NOTIFICATIONS_PREFIX_6 } from "../utils/notifications-util-6";
import { useShared6 } from "../../../shared/hooks/use-shared-6";
export function useNotifications5(input) {
  const [items, setItems] = useState([]);
  const { data } = useQuery({ queryKey: ["notifications", 5, input], queryFn: async () => [] });
  const shared = useShared6(input);
  const keyed = useMemo(() => notificationsUtil6(items, "id"), [items]);
  useEffect(() => { if (data) setItems(data); }, [data]);
  return { items, keyed, shared, prefix: NOTIFICATIONS_PREFIX_6 };
}
