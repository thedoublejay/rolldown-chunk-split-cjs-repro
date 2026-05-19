
import { useEffect, useState, useMemo } from "react";
import _ from "lodash";
import { useQuery } from "@tanstack/react-query";
import { logsUtil5, LOGS_PREFIX_5 } from "../utils/logs-util-5";
import { useShared5 } from "../../../shared/hooks/use-shared-5";
export function useLogs4(input) {
  const [items, setItems] = useState([]);
  const { data } = useQuery({ queryKey: ["logs", 4, input], queryFn: async () => [] });
  const shared = useShared5(input);
  const keyed = useMemo(() => logsUtil5(items, "id"), [items]);
  useEffect(() => { if (data) setItems(data); }, [data]);
  return { items, keyed, shared, prefix: LOGS_PREFIX_5 };
}
