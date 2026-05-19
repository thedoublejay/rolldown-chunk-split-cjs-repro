
import { useEffect, useState, useMemo } from "react";
import _ from "lodash";
import { useQuery } from "@tanstack/react-query";
import { filtersUtil1, FILTERS_PREFIX_1 } from "../utils/filters-util-1";
import { useShared7 } from "../../../shared/hooks/use-shared-7";
export function useFilters6(input) {
  const [items, setItems] = useState([]);
  const { data } = useQuery({ queryKey: ["filters", 6, input], queryFn: async () => [] });
  const shared = useShared7(input);
  const keyed = useMemo(() => filtersUtil1(items, "id"), [items]);
  useEffect(() => { if (data) setItems(data); }, [data]);
  return { items, keyed, shared, prefix: FILTERS_PREFIX_1 };
}
