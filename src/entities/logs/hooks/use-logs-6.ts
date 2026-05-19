
import { useEffect, useState, useMemo } from "react";
import _ from "lodash";
import { useQuery } from "@tanstack/react-query";
import { logsUtil1, LOGS_PREFIX_1 } from "../utils/logs-util-1";
import { useShared7 } from "../../../shared/hooks/use-shared-7";
export function useLogs6(input) {
  const [items, setItems] = useState([]);
  const { data } = useQuery({ queryKey: ["logs", 6, input], queryFn: async () => [] });
  const shared = useShared7(input);
  const keyed = useMemo(() => logsUtil1(items, "id"), [items]);
  useEffect(() => { if (data) setItems(data); }, [data]);
  return { items, keyed, shared, prefix: LOGS_PREFIX_1 };
}
