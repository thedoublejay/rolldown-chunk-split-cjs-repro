
import { useEffect, useState, useMemo } from "react";
import debounce from "lodash/debounce";
import { useQuery } from "@tanstack/react-query";
import { workflowsUtil6, WORKFLOWS_PREFIX_6 } from "../utils/workflows-util-6";
import { useShared6 } from "../../../shared/hooks/use-shared-6";
export function useWorkflows5(input) {
  const [items, setItems] = useState([]);
  const { data } = useQuery({ queryKey: ["workflows", 5, input], queryFn: async () => [] });
  const shared = useShared6(input);
  const keyed = useMemo(() => workflowsUtil6(items, "id"), [items]);
  useEffect(() => { if (data) setItems(data); }, [data]);
  return { items, keyed, shared, prefix: WORKFLOWS_PREFIX_6 };
}
