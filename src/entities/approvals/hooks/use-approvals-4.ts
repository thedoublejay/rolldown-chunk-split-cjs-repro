
import { useEffect, useState, useMemo } from "react";
import _ from "lodash";
import { useQuery } from "@tanstack/react-query";
import { approvalsUtil5, APPROVALS_PREFIX_5 } from "../utils/approvals-util-5";
import { useShared5 } from "../../../shared/hooks/use-shared-5";
export function useApprovals4(input) {
  const [items, setItems] = useState([]);
  const { data } = useQuery({ queryKey: ["approvals", 4, input], queryFn: async () => [] });
  const shared = useShared5(input);
  const keyed = useMemo(() => approvalsUtil5(items, "id"), [items]);
  useEffect(() => { if (data) setItems(data); }, [data]);
  return { items, keyed, shared, prefix: APPROVALS_PREFIX_5 };
}
