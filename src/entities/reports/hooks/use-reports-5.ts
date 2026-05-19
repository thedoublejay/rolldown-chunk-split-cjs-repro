
import { useEffect, useState, useMemo } from "react";
import debounce from "lodash/debounce";
import { useQuery } from "@tanstack/react-query";
import { reportsUtil6, REPORTS_PREFIX_6 } from "../utils/reports-util-6";
import { useShared6 } from "../../../shared/hooks/use-shared-6";
export function useReports5(input) {
  const [items, setItems] = useState([]);
  const { data } = useQuery({ queryKey: ["reports", 5, input], queryFn: async () => [] });
  const shared = useShared6(input);
  const keyed = useMemo(() => reportsUtil6(items, "id"), [items]);
  useEffect(() => { if (data) setItems(data); }, [data]);
  return { items, keyed, shared, prefix: REPORTS_PREFIX_6 };
}
