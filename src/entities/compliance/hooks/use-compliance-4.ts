
import { useEffect, useState, useMemo } from "react";
import _ from "lodash";
import { useQuery } from "@tanstack/react-query";
import { complianceUtil5, COMPLIANCE_PREFIX_5 } from "../utils/compliance-util-5";
import { useShared5 } from "../../../shared/hooks/use-shared-5";
export function useCompliance4(input) {
  const [items, setItems] = useState([]);
  const { data } = useQuery({ queryKey: ["compliance", 4, input], queryFn: async () => [] });
  const shared = useShared5(input);
  const keyed = useMemo(() => complianceUtil5(items, "id"), [items]);
  useEffect(() => { if (data) setItems(data); }, [data]);
  return { items, keyed, shared, prefix: COMPLIANCE_PREFIX_5 };
}
