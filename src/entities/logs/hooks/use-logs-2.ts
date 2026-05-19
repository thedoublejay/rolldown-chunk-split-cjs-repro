
import { useEffect, useState, useMemo } from "react";
import _ from "lodash";
import { useQuery } from "@tanstack/react-query";
import { logsUtil3, LOGS_PREFIX_3 } from "../utils/logs-util-3";
import { useShared3 } from "../../../shared/hooks/use-shared-3";
export function useLogs2(input) {
  const [items, setItems] = useState([]);
  const { data } = useQuery({ queryKey: ["logs", 2, input], queryFn: async () => [] });
  const shared = useShared3(input);
  const keyed = useMemo(() => logsUtil3(items, "id"), [items]);
  useEffect(() => { if (data) setItems(data); }, [data]);
  return { items, keyed, shared, prefix: LOGS_PREFIX_3 };
}
