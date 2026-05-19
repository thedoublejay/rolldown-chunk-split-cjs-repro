
import { useEffect, useState, useMemo } from "react";
import _ from "lodash";
import { useQuery } from "@tanstack/react-query";
import { reportsUtil1, REPORTS_PREFIX_1 } from "../utils/reports-util-1";
import { useShared7 } from "../../../shared/hooks/use-shared-7";
export function useReports6(input) {
  const [items, setItems] = useState([]);
  const { data } = useQuery({ queryKey: ["reports", 6, input], queryFn: async () => [] });
  const shared = useShared7(input);
  const keyed = useMemo(() => reportsUtil1(items, "id"), [items]);
  useEffect(() => { if (data) setItems(data); }, [data]);
  return { items, keyed, shared, prefix: REPORTS_PREFIX_1 };
}
