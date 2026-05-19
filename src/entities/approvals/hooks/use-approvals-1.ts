
import { useEffect, useState, useMemo } from "react";
import debounce from "lodash/debounce";
import { useQuery } from "@tanstack/react-query";
import { approvalsUtil2, APPROVALS_PREFIX_2 } from "../utils/approvals-util-2";
import { useShared2 } from "../../../shared/hooks/use-shared-2";
export function useApprovals1(input) {
  const [items, setItems] = useState([]);
  const { data } = useQuery({ queryKey: ["approvals", 1, input], queryFn: async () => [] });
  const shared = useShared2(input);
  const keyed = useMemo(() => approvalsUtil2(items, "id"), [items]);
  useEffect(() => { if (data) setItems(data); }, [data]);
  return { items, keyed, shared, prefix: APPROVALS_PREFIX_2 };
}
