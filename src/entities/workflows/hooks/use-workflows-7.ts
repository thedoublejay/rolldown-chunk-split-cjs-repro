
import { useEffect, useState, useMemo } from "react";
import debounce from "lodash/debounce";
import { useQuery } from "@tanstack/react-query";
import { workflowsUtil2, WORKFLOWS_PREFIX_2 } from "../utils/workflows-util-2";
import { useShared8 } from "../../../shared/hooks/use-shared-8";
export function useWorkflows7(input) {
  const [items, setItems] = useState([]);
  const { data } = useQuery({ queryKey: ["workflows", 7, input], queryFn: async () => [] });
  const shared = useShared8(input);
  const keyed = useMemo(() => workflowsUtil2(items, "id"), [items]);
  useEffect(() => { if (data) setItems(data); }, [data]);
  return { items, keyed, shared, prefix: WORKFLOWS_PREFIX_2 };
}
