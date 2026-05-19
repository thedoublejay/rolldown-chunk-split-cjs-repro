
import { useEffect, useState, useMemo } from "react";
import _ from "lodash";
import { useQuery } from "@tanstack/react-query";
import { sessionsUtil5, SESSIONS_PREFIX_5 } from "../utils/sessions-util-5";
import { useShared5 } from "../../../shared/hooks/use-shared-5";
export function useSessions4(input) {
  const [items, setItems] = useState([]);
  const { data } = useQuery({ queryKey: ["sessions", 4, input], queryFn: async () => [] });
  const shared = useShared5(input);
  const keyed = useMemo(() => sessionsUtil5(items, "id"), [items]);
  useEffect(() => { if (data) setItems(data); }, [data]);
  return { items, keyed, shared, prefix: SESSIONS_PREFIX_5 };
}
