
import { useEffect, useState, useMemo } from "react";
import _ from "lodash";
import { useQuery } from "@tanstack/react-query";
import { approvalsUtil3, APPROVALS_PREFIX_3 } from "../utils/approvals-util-3";
import { useShared9 } from "../../../shared/hooks/use-shared-9";
export function useApprovals8(input) {
  const [items, setItems] = useState([]);
  const { data } = useQuery({ queryKey: ["approvals", 8, input], queryFn: async () => [] });
  const shared = useShared9(input);
  const keyed = useMemo(() => approvalsUtil3(items, "id"), [items]);
  useEffect(() => { if (data) setItems(data); }, [data]);
  return { items, keyed, shared, prefix: APPROVALS_PREFIX_3 };
}
