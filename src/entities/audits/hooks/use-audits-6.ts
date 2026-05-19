
import { useEffect, useState, useMemo } from "react";
import _ from "lodash";
import { useQuery } from "@tanstack/react-query";
import { auditsUtil1, AUDITS_PREFIX_1 } from "../utils/audits-util-1";
import { useShared7 } from "../../../shared/hooks/use-shared-7";
export function useAudits6(input) {
  const [items, setItems] = useState([]);
  const { data } = useQuery({ queryKey: ["audits", 6, input], queryFn: async () => [] });
  const shared = useShared7(input);
  const keyed = useMemo(() => auditsUtil1(items, "id"), [items]);
  useEffect(() => { if (data) setItems(data); }, [data]);
  return { items, keyed, shared, prefix: AUDITS_PREFIX_1 };
}
