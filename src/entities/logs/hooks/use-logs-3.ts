
import { useEffect, useState, useMemo } from "react";
import debounce from "lodash/debounce";
import { useQuery } from "@tanstack/react-query";
import { logsUtil4, LOGS_PREFIX_4 } from "../utils/logs-util-4";
import { useShared4 } from "../../../shared/hooks/use-shared-4";
export function useLogs3(input) {
  const [items, setItems] = useState([]);
  const { data } = useQuery({ queryKey: ["logs", 3, input], queryFn: async () => [] });
  const shared = useShared4(input);
  const keyed = useMemo(() => logsUtil4(items, "id"), [items]);
  useEffect(() => { if (data) setItems(data); }, [data]);
  return { items, keyed, shared, prefix: LOGS_PREFIX_4 };
}
