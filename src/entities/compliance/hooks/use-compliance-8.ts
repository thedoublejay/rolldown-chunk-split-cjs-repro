
import { useEffect, useState, useMemo } from "react";
import _ from "lodash";
import { useQuery } from "@tanstack/react-query";
import { complianceUtil3, COMPLIANCE_PREFIX_3 } from "../utils/compliance-util-3";
import { useShared9 } from "../../../shared/hooks/use-shared-9";
export function useCompliance8(input) {
  const [items, setItems] = useState([]);
  const { data } = useQuery({ queryKey: ["compliance", 8, input], queryFn: async () => [] });
  const shared = useShared9(input);
  const keyed = useMemo(() => complianceUtil3(items, "id"), [items]);
  useEffect(() => { if (data) setItems(data); }, [data]);
  return { items, keyed, shared, prefix: COMPLIANCE_PREFIX_3 };
}
