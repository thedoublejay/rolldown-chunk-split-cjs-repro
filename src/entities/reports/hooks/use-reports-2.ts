
import { useEffect, useState, useMemo } from "react";
import _ from "lodash";
import { useQuery } from "@tanstack/react-query";
import { reportsUtil3, REPORTS_PREFIX_3 } from "../utils/reports-util-3";
import { useShared3 } from "../../../shared/hooks/use-shared-3";
export function useReports2(input) {
  const [items, setItems] = useState([]);
  const { data } = useQuery({ queryKey: ["reports", 2, input], queryFn: async () => [] });
  const shared = useShared3(input);
  const keyed = useMemo(() => reportsUtil3(items, "id"), [items]);
  useEffect(() => { if (data) setItems(data); }, [data]);
  return { items, keyed, shared, prefix: REPORTS_PREFIX_3 };
}
