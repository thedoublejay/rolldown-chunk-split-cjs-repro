
import { useEffect, useState, useMemo } from "react";
import debounce from "lodash/debounce";
import { useQuery } from "@tanstack/react-query";
import { logsUtil6, LOGS_PREFIX_6 } from "../utils/logs-util-6";
import { useShared6 } from "../../../shared/hooks/use-shared-6";
export function useLogs5(input) {
  const [items, setItems] = useState([]);
  const { data } = useQuery({ queryKey: ["logs", 5, input], queryFn: async () => [] });
  const shared = useShared6(input);
  const keyed = useMemo(() => logsUtil6(items, "id"), [items]);
  useEffect(() => { if (data) setItems(data); }, [data]);
  return { items, keyed, shared, prefix: LOGS_PREFIX_6 };
}
