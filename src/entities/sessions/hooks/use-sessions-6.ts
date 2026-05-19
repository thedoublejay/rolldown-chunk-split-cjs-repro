
import { useEffect, useState, useMemo } from "react";
import _ from "lodash";
import { useQuery } from "@tanstack/react-query";
import { sessionsUtil1, SESSIONS_PREFIX_1 } from "../utils/sessions-util-1";
import { useShared7 } from "../../../shared/hooks/use-shared-7";
export function useSessions6(input) {
  const [items, setItems] = useState([]);
  const { data } = useQuery({ queryKey: ["sessions", 6, input], queryFn: async () => [] });
  const shared = useShared7(input);
  const keyed = useMemo(() => sessionsUtil1(items, "id"), [items]);
  useEffect(() => { if (data) setItems(data); }, [data]);
  return { items, keyed, shared, prefix: SESSIONS_PREFIX_1 };
}
