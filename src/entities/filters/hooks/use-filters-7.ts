
import { useEffect, useState, useMemo } from "react";
import debounce from "lodash/debounce";
import { useQuery } from "@tanstack/react-query";
import { filtersUtil2, FILTERS_PREFIX_2 } from "../utils/filters-util-2";
import { useShared8 } from "../../../shared/hooks/use-shared-8";
export function useFilters7(input) {
  const [items, setItems] = useState([]);
  const { data } = useQuery({ queryKey: ["filters", 7, input], queryFn: async () => [] });
  const shared = useShared8(input);
  const keyed = useMemo(() => filtersUtil2(items, "id"), [items]);
  useEffect(() => { if (data) setItems(data); }, [data]);
  return { items, keyed, shared, prefix: FILTERS_PREFIX_2 };
}
