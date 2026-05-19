
import { useEffect, useState, useMemo } from "react";
import debounce from "lodash/debounce";
import { useQuery } from "@tanstack/react-query";
import { approvalsUtil4, APPROVALS_PREFIX_4 } from "../utils/approvals-util-4";
import { useShared4 } from "../../../shared/hooks/use-shared-4";
export function useApprovals3(input) {
  const [items, setItems] = useState([]);
  const { data } = useQuery({ queryKey: ["approvals", 3, input], queryFn: async () => [] });
  const shared = useShared4(input);
  const keyed = useMemo(() => approvalsUtil4(items, "id"), [items]);
  useEffect(() => { if (data) setItems(data); }, [data]);
  return { items, keyed, shared, prefix: APPROVALS_PREFIX_4 };
}
