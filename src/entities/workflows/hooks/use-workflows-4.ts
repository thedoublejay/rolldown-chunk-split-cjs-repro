
import { useEffect, useState, useMemo } from "react";
import _ from "lodash";
import { useQuery } from "@tanstack/react-query";
import { workflowsUtil5, WORKFLOWS_PREFIX_5 } from "../utils/workflows-util-5";
import { useShared5 } from "../../../shared/hooks/use-shared-5";
export function useWorkflows4(input) {
  const [items, setItems] = useState([]);
  const { data } = useQuery({ queryKey: ["workflows", 4, input], queryFn: async () => [] });
  const shared = useShared5(input);
  const keyed = useMemo(() => workflowsUtil5(items, "id"), [items]);
  useEffect(() => { if (data) setItems(data); }, [data]);
  return { items, keyed, shared, prefix: WORKFLOWS_PREFIX_5 };
}
