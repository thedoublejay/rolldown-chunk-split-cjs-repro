
import { useEffect, useState, useMemo } from "react";
import debounce from "lodash/debounce";
import { useQuery } from "@tanstack/react-query";
import { auditsUtil2, AUDITS_PREFIX_2 } from "../utils/audits-util-2";
import { useShared2 } from "../../../shared/hooks/use-shared-2";
export function useAudits1(input) {
  const [items, setItems] = useState([]);
  const { data } = useQuery({ queryKey: ["audits", 1, input], queryFn: async () => [] });
  const shared = useShared2(input);
  const keyed = useMemo(() => auditsUtil2(items, "id"), [items]);
  useEffect(() => { if (data) setItems(data); }, [data]);
  return { items, keyed, shared, prefix: AUDITS_PREFIX_2 };
}
