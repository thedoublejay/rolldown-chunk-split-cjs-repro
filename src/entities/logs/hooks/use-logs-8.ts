
import { useEffect, useState, useMemo } from "react";
import _ from "lodash";
import { useQuery } from "@tanstack/react-query";
import { logsUtil3, LOGS_PREFIX_3 } from "../utils/logs-util-3";
import { useShared9 } from "../../../shared/hooks/use-shared-9";
export function useLogs8(input) {
  const [items, setItems] = useState([]);
  const { data } = useQuery({ queryKey: ["logs", 8, input], queryFn: async () => [] });
  const shared = useShared9(input);
  const keyed = useMemo(() => logsUtil3(items, "id"), [items]);
  useEffect(() => { if (data) setItems(data); }, [data]);
  return { items, keyed, shared, prefix: LOGS_PREFIX_3 };
}
