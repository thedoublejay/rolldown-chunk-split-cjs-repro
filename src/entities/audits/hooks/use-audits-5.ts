
import { useEffect, useState, useMemo } from "react";
import debounce from "lodash/debounce";
import { useQuery } from "@tanstack/react-query";
import { auditsUtil6, AUDITS_PREFIX_6 } from "../utils/audits-util-6";
import { useShared6 } from "../../../shared/hooks/use-shared-6";
export function useAudits5(input) {
  const [items, setItems] = useState([]);
  const { data } = useQuery({ queryKey: ["audits", 5, input], queryFn: async () => [] });
  const shared = useShared6(input);
  const keyed = useMemo(() => auditsUtil6(items, "id"), [items]);
  useEffect(() => { if (data) setItems(data); }, [data]);
  return { items, keyed, shared, prefix: AUDITS_PREFIX_6 };
}
