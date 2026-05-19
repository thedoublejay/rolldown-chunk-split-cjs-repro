
import { useEffect, useState, useMemo } from "react";
import debounce from "lodash/debounce";
import { useQuery } from "@tanstack/react-query";
import { logsUtil2, LOGS_PREFIX_2 } from "../utils/logs-util-2";
import { useShared2 } from "../../../shared/hooks/use-shared-2";
export function useLogs1(input) {
  const [items, setItems] = useState([]);
  const { data } = useQuery({ queryKey: ["logs", 1, input], queryFn: async () => [] });
  const shared = useShared2(input);
  const keyed = useMemo(() => logsUtil2(items, "id"), [items]);
  useEffect(() => { if (data) setItems(data); }, [data]);
  return { items, keyed, shared, prefix: LOGS_PREFIX_2 };
}
