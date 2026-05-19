
import { useEffect, useState, useMemo } from "react";
import debounce from "lodash/debounce";
import { useQuery } from "@tanstack/react-query";
import { filtersUtil4, FILTERS_PREFIX_4 } from "../utils/filters-util-4";
import { useShared4 } from "../../../shared/hooks/use-shared-4";
export function useFilters3(input) {
  const [items, setItems] = useState([]);
  const { data } = useQuery({ queryKey: ["filters", 3, input], queryFn: async () => [] });
  const shared = useShared4(input);
  const keyed = useMemo(() => filtersUtil4(items, "id"), [items]);
  useEffect(() => { if (data) setItems(data); }, [data]);
  return { items, keyed, shared, prefix: FILTERS_PREFIX_4 };
}
