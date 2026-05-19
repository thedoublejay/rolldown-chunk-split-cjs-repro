
import { useEffect, useState, useMemo } from "react";
import debounce from "lodash/debounce";
import { useQuery } from "@tanstack/react-query";
import { auditsUtil4, AUDITS_PREFIX_4 } from "../utils/audits-util-4";
import { useShared4 } from "../../../shared/hooks/use-shared-4";
export function useAudits3(input) {
  const [items, setItems] = useState([]);
  const { data } = useQuery({ queryKey: ["audits", 3, input], queryFn: async () => [] });
  const shared = useShared4(input);
  const keyed = useMemo(() => auditsUtil4(items, "id"), [items]);
  useEffect(() => { if (data) setItems(data); }, [data]);
  return { items, keyed, shared, prefix: AUDITS_PREFIX_4 };
}
