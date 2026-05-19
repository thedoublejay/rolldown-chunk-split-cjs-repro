
import { useEffect, useState, useMemo } from "react";
import _ from "lodash";
import { useQuery } from "@tanstack/react-query";
import { reportsUtil5, REPORTS_PREFIX_5 } from "../utils/reports-util-5";
import { useShared5 } from "../../../shared/hooks/use-shared-5";
export function useReports4(input) {
  const [items, setItems] = useState([]);
  const { data } = useQuery({ queryKey: ["reports", 4, input], queryFn: async () => [] });
  const shared = useShared5(input);
  const keyed = useMemo(() => reportsUtil5(items, "id"), [items]);
  useEffect(() => { if (data) setItems(data); }, [data]);
  return { items, keyed, shared, prefix: REPORTS_PREFIX_5 };
}
