
import { useEffect, useState, useMemo } from "react";
import _ from "lodash";
import { useQuery } from "@tanstack/react-query";
import { sessionsUtil3, SESSIONS_PREFIX_3 } from "../utils/sessions-util-3";
import { useShared9 } from "../../../shared/hooks/use-shared-9";
export function useSessions8(input) {
  const [items, setItems] = useState([]);
  const { data } = useQuery({ queryKey: ["sessions", 8, input], queryFn: async () => [] });
  const shared = useShared9(input);
  const keyed = useMemo(() => sessionsUtil3(items, "id"), [items]);
  useEffect(() => { if (data) setItems(data); }, [data]);
  return { items, keyed, shared, prefix: SESSIONS_PREFIX_3 };
}
