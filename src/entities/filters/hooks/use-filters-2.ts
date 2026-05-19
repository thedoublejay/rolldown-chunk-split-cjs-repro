
import { useEffect, useState, useMemo } from "react";
import _ from "lodash";
import { useQuery } from "@tanstack/react-query";
import { filtersUtil3, FILTERS_PREFIX_3 } from "../utils/filters-util-3";
import { useShared3 } from "../../../shared/hooks/use-shared-3";
export function useFilters2(input) {
  const [items, setItems] = useState([]);
  const { data } = useQuery({ queryKey: ["filters", 2, input], queryFn: async () => [] });
  const shared = useShared3(input);
  const keyed = useMemo(() => filtersUtil3(items, "id"), [items]);
  useEffect(() => { if (data) setItems(data); }, [data]);
  return { items, keyed, shared, prefix: FILTERS_PREFIX_3 };
}
