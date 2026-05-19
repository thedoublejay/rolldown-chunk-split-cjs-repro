
import { useEffect, useState, useMemo } from "react";
import debounce from "lodash/debounce";
import { useQuery } from "@tanstack/react-query";
import { reportsUtil2, REPORTS_PREFIX_2 } from "../utils/reports-util-2";
import { useShared8 } from "../../../shared/hooks/use-shared-8";
export function useReports7(input) {
  const [items, setItems] = useState([]);
  const { data } = useQuery({ queryKey: ["reports", 7, input], queryFn: async () => [] });
  const shared = useShared8(input);
  const keyed = useMemo(() => reportsUtil2(items, "id"), [items]);
  useEffect(() => { if (data) setItems(data); }, [data]);
  return { items, keyed, shared, prefix: REPORTS_PREFIX_2 };
}
