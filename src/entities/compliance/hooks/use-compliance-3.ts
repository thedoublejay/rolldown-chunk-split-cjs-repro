
import { useEffect, useState, useMemo } from "react";
import debounce from "lodash/debounce";
import { useQuery } from "@tanstack/react-query";
import { complianceUtil4, COMPLIANCE_PREFIX_4 } from "../utils/compliance-util-4";
import { useShared4 } from "../../../shared/hooks/use-shared-4";
export function useCompliance3(input) {
  const [items, setItems] = useState([]);
  const { data } = useQuery({ queryKey: ["compliance", 3, input], queryFn: async () => [] });
  const shared = useShared4(input);
  const keyed = useMemo(() => complianceUtil4(items, "id"), [items]);
  useEffect(() => { if (data) setItems(data); }, [data]);
  return { items, keyed, shared, prefix: COMPLIANCE_PREFIX_4 };
}
