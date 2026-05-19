
import { useEffect, useState, useMemo } from "react";
import debounce from "lodash/debounce";
import { useQuery } from "@tanstack/react-query";
import { sessionsUtil4, SESSIONS_PREFIX_4 } from "../utils/sessions-util-4";
import { useShared4 } from "../../../shared/hooks/use-shared-4";
export function useSessions3(input) {
  const [items, setItems] = useState([]);
  const { data } = useQuery({ queryKey: ["sessions", 3, input], queryFn: async () => [] });
  const shared = useShared4(input);
  const keyed = useMemo(() => sessionsUtil4(items, "id"), [items]);
  useEffect(() => { if (data) setItems(data); }, [data]);
  return { items, keyed, shared, prefix: SESSIONS_PREFIX_4 };
}
