
import { useEffect, useState, useMemo } from "react";
import _ from "lodash";
import { useQuery } from "@tanstack/react-query";
import { workflowsUtil3, WORKFLOWS_PREFIX_3 } from "../utils/workflows-util-3";
import { useShared3 } from "../../../shared/hooks/use-shared-3";
export function useWorkflows2(input) {
  const [items, setItems] = useState([]);
  const { data } = useQuery({ queryKey: ["workflows", 2, input], queryFn: async () => [] });
  const shared = useShared3(input);
  const keyed = useMemo(() => workflowsUtil3(items, "id"), [items]);
  useEffect(() => { if (data) setItems(data); }, [data]);
  return { items, keyed, shared, prefix: WORKFLOWS_PREFIX_3 };
}
