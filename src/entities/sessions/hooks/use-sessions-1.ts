
import { useEffect, useState, useMemo } from "react";
import debounce from "lodash/debounce";
import { useQuery } from "@tanstack/react-query";
import { sessionsUtil2, SESSIONS_PREFIX_2 } from "../utils/sessions-util-2";
import { useShared2 } from "../../../shared/hooks/use-shared-2";
export function useSessions1(input) {
  const [items, setItems] = useState([]);
  const { data } = useQuery({ queryKey: ["sessions", 1, input], queryFn: async () => [] });
  const shared = useShared2(input);
  const keyed = useMemo(() => sessionsUtil2(items, "id"), [items]);
  useEffect(() => { if (data) setItems(data); }, [data]);
  return { items, keyed, shared, prefix: SESSIONS_PREFIX_2 };
}
