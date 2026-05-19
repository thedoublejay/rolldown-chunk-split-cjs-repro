
import { useEffect, useState, useMemo } from "react";
import _ from "lodash";
import { useQuery } from "@tanstack/react-query";
import { filtersUtil5, FILTERS_PREFIX_5 } from "../utils/filters-util-5";
import { useShared5 } from "../../../shared/hooks/use-shared-5";
export function useFilters4(input) {
  const [items, setItems] = useState([]);
  const { data } = useQuery({ queryKey: ["filters", 4, input], queryFn: async () => [] });
  const shared = useShared5(input);
  const keyed = useMemo(() => filtersUtil5(items, "id"), [items]);
  useEffect(() => { if (data) setItems(data); }, [data]);
  return { items, keyed, shared, prefix: FILTERS_PREFIX_5 };
}
