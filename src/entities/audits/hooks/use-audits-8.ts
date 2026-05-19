
import { useEffect, useState, useMemo } from "react";
import _ from "lodash";
import { useQuery } from "@tanstack/react-query";
import { auditsUtil3, AUDITS_PREFIX_3 } from "../utils/audits-util-3";
import { useShared9 } from "../../../shared/hooks/use-shared-9";
export function useAudits8(input) {
  const [items, setItems] = useState([]);
  const { data } = useQuery({ queryKey: ["audits", 8, input], queryFn: async () => [] });
  const shared = useShared9(input);
  const keyed = useMemo(() => auditsUtil3(items, "id"), [items]);
  useEffect(() => { if (data) setItems(data); }, [data]);
  return { items, keyed, shared, prefix: AUDITS_PREFIX_3 };
}
