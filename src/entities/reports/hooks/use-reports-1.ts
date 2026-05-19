
import { useEffect, useState, useMemo } from "react";
import debounce from "lodash/debounce";
import { useQuery } from "@tanstack/react-query";
import { reportsUtil2, REPORTS_PREFIX_2 } from "../utils/reports-util-2";
import { useShared2 } from "../../../shared/hooks/use-shared-2";
export function useReports1(input) {
  const [items, setItems] = useState([]);
  const { data } = useQuery({ queryKey: ["reports", 1, input], queryFn: async () => [] });
  const shared = useShared2(input);
  const keyed = useMemo(() => reportsUtil2(items, "id"), [items]);
  useEffect(() => { if (data) setItems(data); }, [data]);
  return { items, keyed, shared, prefix: REPORTS_PREFIX_2 };
}
