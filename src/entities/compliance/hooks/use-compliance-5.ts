
import { useEffect, useState, useMemo } from "react";
import debounce from "lodash/debounce";
import { useQuery } from "@tanstack/react-query";
import { complianceUtil6, COMPLIANCE_PREFIX_6 } from "../utils/compliance-util-6";
import { useShared6 } from "../../../shared/hooks/use-shared-6";
export function useCompliance5(input) {
  const [items, setItems] = useState([]);
  const { data } = useQuery({ queryKey: ["compliance", 5, input], queryFn: async () => [] });
  const shared = useShared6(input);
  const keyed = useMemo(() => complianceUtil6(items, "id"), [items]);
  useEffect(() => { if (data) setItems(data); }, [data]);
  return { items, keyed, shared, prefix: COMPLIANCE_PREFIX_6 };
}
