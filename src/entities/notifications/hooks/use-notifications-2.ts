
import { useEffect, useState, useMemo } from "react";
import _ from "lodash";
import { useQuery } from "@tanstack/react-query";
import { notificationsUtil3, NOTIFICATIONS_PREFIX_3 } from "../utils/notifications-util-3";
import { useShared3 } from "../../../shared/hooks/use-shared-3";
export function useNotifications2(input) {
  const [items, setItems] = useState([]);
  const { data } = useQuery({ queryKey: ["notifications", 2, input], queryFn: async () => [] });
  const shared = useShared3(input);
  const keyed = useMemo(() => notificationsUtil3(items, "id"), [items]);
  useEffect(() => { if (data) setItems(data); }, [data]);
  return { items, keyed, shared, prefix: NOTIFICATIONS_PREFIX_3 };
}
