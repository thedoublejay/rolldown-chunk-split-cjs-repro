
import { useEffect, useState, useMemo } from "react";
import debounce from "lodash/debounce";
import { useQuery } from "@tanstack/react-query";
import { filtersUtil6, FILTERS_PREFIX_6 } from "../utils/filters-util-6";
import { useShared6 } from "../../../shared/hooks/use-shared-6";
export function useFilters5(input) {
  const [items, setItems] = useState([]);
  const { data } = useQuery({ queryKey: ["filters", 5, input], queryFn: async () => [] });
  const shared = useShared6(input);
  const keyed = useMemo(() => filtersUtil6(items, "id"), [items]);
  useEffect(() => { if (data) setItems(data); }, [data]);
  return { items, keyed, shared, prefix: FILTERS_PREFIX_6 };
}
