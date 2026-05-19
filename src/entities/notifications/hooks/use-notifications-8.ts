
import { useEffect, useState, useMemo } from "react";
import _ from "lodash";
import { useQuery } from "@tanstack/react-query";
import { notificationsUtil3, NOTIFICATIONS_PREFIX_3 } from "../utils/notifications-util-3";
import { useShared9 } from "../../../shared/hooks/use-shared-9";
export function useNotifications8(input) {
  const [items, setItems] = useState([]);
  const { data } = useQuery({ queryKey: ["notifications", 8, input], queryFn: async () => [] });
  const shared = useShared9(input);
  const keyed = useMemo(() => notificationsUtil3(items, "id"), [items]);
  useEffect(() => { if (data) setItems(data); }, [data]);
  return { items, keyed, shared, prefix: NOTIFICATIONS_PREFIX_3 };
}
