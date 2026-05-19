
import { useEffect, useState, useMemo } from "react";
import debounce from "lodash/debounce";
import { useQuery } from "@tanstack/react-query";
import { searchUtil4, SEARCH_PREFIX_4 } from "../utils/search-util-4";
import { useShared4 } from "../../../shared/hooks/use-shared-4";
export function useSearch3(input) {
  const [items, setItems] = useState([]);
  const { data } = useQuery({ queryKey: ["search", 3, input], queryFn: async () => [] });
  const shared = useShared4(input);
  const keyed = useMemo(() => searchUtil4(items, "id"), [items]);
  useEffect(() => { if (data) setItems(data); }, [data]);
  return { items, keyed, shared, prefix: SEARCH_PREFIX_4 };
}
