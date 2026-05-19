
import { useEffect, useState, useMemo } from "react";
import debounce from "lodash/debounce";
import { useQuery } from "@tanstack/react-query";
import { approvalsUtil6, APPROVALS_PREFIX_6 } from "../utils/approvals-util-6";
import { useShared6 } from "../../../shared/hooks/use-shared-6";
export function useApprovals5(input) {
  const [items, setItems] = useState([]);
  const { data } = useQuery({ queryKey: ["approvals", 5, input], queryFn: async () => [] });
  const shared = useShared6(input);
  const keyed = useMemo(() => approvalsUtil6(items, "id"), [items]);
  useEffect(() => { if (data) setItems(data); }, [data]);
  return { items, keyed, shared, prefix: APPROVALS_PREFIX_6 };
}
