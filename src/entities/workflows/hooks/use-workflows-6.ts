
import { useEffect, useState, useMemo } from "react";
import _ from "lodash";
import { useQuery } from "@tanstack/react-query";
import { workflowsUtil1, WORKFLOWS_PREFIX_1 } from "../utils/workflows-util-1";
import { useShared7 } from "../../../shared/hooks/use-shared-7";
export function useWorkflows6(input) {
  const [items, setItems] = useState([]);
  const { data } = useQuery({ queryKey: ["workflows", 6, input], queryFn: async () => [] });
  const shared = useShared7(input);
  const keyed = useMemo(() => workflowsUtil1(items, "id"), [items]);
  useEffect(() => { if (data) setItems(data); }, [data]);
  return { items, keyed, shared, prefix: WORKFLOWS_PREFIX_1 };
}
