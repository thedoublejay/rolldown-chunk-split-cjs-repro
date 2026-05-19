
import { useEffect, useState, useMemo } from "react";
import debounce from "lodash/debounce";
import { useQuery } from "@tanstack/react-query";
import { auditsUtil2, AUDITS_PREFIX_2 } from "../utils/audits-util-2";
import { useShared8 } from "../../../shared/hooks/use-shared-8";
export function useAudits7(input) {
  const [items, setItems] = useState([]);
  const { data } = useQuery({ queryKey: ["audits", 7, input], queryFn: async () => [] });
  const shared = useShared8(input);
  const keyed = useMemo(() => auditsUtil2(items, "id"), [items]);
  useEffect(() => { if (data) setItems(data); }, [data]);
  return { items, keyed, shared, prefix: AUDITS_PREFIX_2 };
}
