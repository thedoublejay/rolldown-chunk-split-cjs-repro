
import { useEffect, useState, useMemo } from "react";
import _ from "lodash";
import { useQuery } from "@tanstack/react-query";
import { filtersUtil3, FILTERS_PREFIX_3 } from "../utils/filters-util-3";
import { useShared9 } from "../../../shared/hooks/use-shared-9";
export function useFilters8(input) {
  const [items, setItems] = useState([]);
  const { data } = useQuery({ queryKey: ["filters", 8, input], queryFn: async () => [] });
  const shared = useShared9(input);
  const keyed = useMemo(() => filtersUtil3(items, "id"), [items]);
  useEffect(() => { if (data) setItems(data); }, [data]);
  return { items, keyed, shared, prefix: FILTERS_PREFIX_3 };
}
