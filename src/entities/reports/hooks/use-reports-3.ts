
import { useEffect, useState, useMemo } from "react";
import debounce from "lodash/debounce";
import { useQuery } from "@tanstack/react-query";
import { reportsUtil4, REPORTS_PREFIX_4 } from "../utils/reports-util-4";
import { useShared4 } from "../../../shared/hooks/use-shared-4";
export function useReports3(input) {
  const [items, setItems] = useState([]);
  const { data } = useQuery({ queryKey: ["reports", 3, input], queryFn: async () => [] });
  const shared = useShared4(input);
  const keyed = useMemo(() => reportsUtil4(items, "id"), [items]);
  useEffect(() => { if (data) setItems(data); }, [data]);
  return { items, keyed, shared, prefix: REPORTS_PREFIX_4 };
}
