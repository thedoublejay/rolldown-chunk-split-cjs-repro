
import { useEffect, useState, useMemo } from "react";
import debounce from "lodash/debounce";
import { useQuery } from "@tanstack/react-query";
import { filtersUtil2, FILTERS_PREFIX_2 } from "../utils/filters-util-2";
import { useShared2 } from "../../../shared/hooks/use-shared-2";
export function useFilters1(input) {
  const [items, setItems] = useState([]);
  const { data } = useQuery({ queryKey: ["filters", 1, input], queryFn: async () => [] });
  const shared = useShared2(input);
  const keyed = useMemo(() => filtersUtil2(items, "id"), [items]);
  useEffect(() => { if (data) setItems(data); }, [data]);
  return { items, keyed, shared, prefix: FILTERS_PREFIX_2 };
}
