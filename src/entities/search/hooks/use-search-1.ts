
import { useEffect, useState, useMemo } from "react";
import debounce from "lodash/debounce";
import { useQuery } from "@tanstack/react-query";
import { searchUtil2, SEARCH_PREFIX_2 } from "../utils/search-util-2";
import { useShared2 } from "../../../shared/hooks/use-shared-2";
export function useSearch1(input) {
  const [items, setItems] = useState([]);
  const { data } = useQuery({ queryKey: ["search", 1, input], queryFn: async () => [] });
  const shared = useShared2(input);
  const keyed = useMemo(() => searchUtil2(items, "id"), [items]);
  useEffect(() => { if (data) setItems(data); }, [data]);
  return { items, keyed, shared, prefix: SEARCH_PREFIX_2 };
}
