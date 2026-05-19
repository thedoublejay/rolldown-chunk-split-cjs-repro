
import { useEffect, useState, useMemo } from "react";
import _ from "lodash";
import { useQuery } from "@tanstack/react-query";
import { notificationsUtil5, NOTIFICATIONS_PREFIX_5 } from "../utils/notifications-util-5";
import { useShared5 } from "../../../shared/hooks/use-shared-5";
export function useNotifications4(input) {
  const [items, setItems] = useState([]);
  const { data } = useQuery({ queryKey: ["notifications", 4, input], queryFn: async () => [] });
  const shared = useShared5(input);
  const keyed = useMemo(() => notificationsUtil5(items, "id"), [items]);
  useEffect(() => { if (data) setItems(data); }, [data]);
  return { items, keyed, shared, prefix: NOTIFICATIONS_PREFIX_5 };
}
