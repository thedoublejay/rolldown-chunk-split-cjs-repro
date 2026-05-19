
import { useEffect, useState, useMemo } from "react";
import debounce from "lodash/debounce";
import { useQuery } from "@tanstack/react-query";
import { workflowsUtil4, WORKFLOWS_PREFIX_4 } from "../utils/workflows-util-4";
import { useShared4 } from "../../../shared/hooks/use-shared-4";
export function useWorkflows3(input) {
  const [items, setItems] = useState([]);
  const { data } = useQuery({ queryKey: ["workflows", 3, input], queryFn: async () => [] });
  const shared = useShared4(input);
  const keyed = useMemo(() => workflowsUtil4(items, "id"), [items]);
  useEffect(() => { if (data) setItems(data); }, [data]);
  return { items, keyed, shared, prefix: WORKFLOWS_PREFIX_4 };
}
