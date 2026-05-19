
import { useEffect, useState, useMemo } from "react";
import _ from "lodash";
import { useQuery } from "@tanstack/react-query";
import { reportsUtil3, REPORTS_PREFIX_3 } from "../utils/reports-util-3";
import { useShared9 } from "../../../shared/hooks/use-shared-9";
export function useReports8(input) {
  const [items, setItems] = useState([]);
  const { data } = useQuery({ queryKey: ["reports", 8, input], queryFn: async () => [] });
  const shared = useShared9(input);
  const keyed = useMemo(() => reportsUtil3(items, "id"), [items]);
  useEffect(() => { if (data) setItems(data); }, [data]);
  return { items, keyed, shared, prefix: REPORTS_PREFIX_3 };
}
