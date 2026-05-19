
import { useEffect, useState, useMemo } from "react";
import _ from "lodash";
import { useQuery } from "@tanstack/react-query";
import { auditsUtil5, AUDITS_PREFIX_5 } from "../utils/audits-util-5";
import { useShared5 } from "../../../shared/hooks/use-shared-5";
export function useAudits4(input) {
  const [items, setItems] = useState([]);
  const { data } = useQuery({ queryKey: ["audits", 4, input], queryFn: async () => [] });
  const shared = useShared5(input);
  const keyed = useMemo(() => auditsUtil5(items, "id"), [items]);
  useEffect(() => { if (data) setItems(data); }, [data]);
  return { items, keyed, shared, prefix: AUDITS_PREFIX_5 };
}
