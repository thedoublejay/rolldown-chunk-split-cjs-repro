
import { useEffect, useState, useMemo } from "react";
import _ from "lodash";
import { useQuery } from "@tanstack/react-query";
import { approvalsUtil1, APPROVALS_PREFIX_1 } from "../utils/approvals-util-1";
import { useShared7 } from "../../../shared/hooks/use-shared-7";
export function useApprovals6(input) {
  const [items, setItems] = useState([]);
  const { data } = useQuery({ queryKey: ["approvals", 6, input], queryFn: async () => [] });
  const shared = useShared7(input);
  const keyed = useMemo(() => approvalsUtil1(items, "id"), [items]);
  useEffect(() => { if (data) setItems(data); }, [data]);
  return { items, keyed, shared, prefix: APPROVALS_PREFIX_1 };
}
