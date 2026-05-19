
import { useEffect, useState, useMemo } from "react";
import debounce from "lodash/debounce";
import { useQuery } from "@tanstack/react-query";
import { approvalsUtil2, APPROVALS_PREFIX_2 } from "../utils/approvals-util-2";
import { useShared8 } from "../../../shared/hooks/use-shared-8";
export function useApprovals7(input) {
  const [items, setItems] = useState([]);
  const { data } = useQuery({ queryKey: ["approvals", 7, input], queryFn: async () => [] });
  const shared = useShared8(input);
  const keyed = useMemo(() => approvalsUtil2(items, "id"), [items]);
  useEffect(() => { if (data) setItems(data); }, [data]);
  return { items, keyed, shared, prefix: APPROVALS_PREFIX_2 };
}
