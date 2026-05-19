
import { useEffect, useState, useMemo } from "react";
import _ from "lodash";
import { useQuery } from "@tanstack/react-query";
import { workflowsUtil3, WORKFLOWS_PREFIX_3 } from "../utils/workflows-util-3";
import { useShared9 } from "../../../shared/hooks/use-shared-9";
export function useWorkflows8(input) {
  const [items, setItems] = useState([]);
  const { data } = useQuery({ queryKey: ["workflows", 8, input], queryFn: async () => [] });
  const shared = useShared9(input);
  const keyed = useMemo(() => workflowsUtil3(items, "id"), [items]);
  useEffect(() => { if (data) setItems(data); }, [data]);
  return { items, keyed, shared, prefix: WORKFLOWS_PREFIX_3 };
}
