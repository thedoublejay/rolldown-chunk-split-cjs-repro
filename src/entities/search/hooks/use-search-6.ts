
import { useEffect, useState, useMemo } from "react";
import _ from "lodash";
import { useQuery } from "@tanstack/react-query";
import { searchUtil1, SEARCH_PREFIX_1 } from "../utils/search-util-1";
import { useShared7 } from "../../../shared/hooks/use-shared-7";
export function useSearch6(input) {
  const [items, setItems] = useState([]);
  const { data } = useQuery({ queryKey: ["search", 6, input], queryFn: async () => [] });
  const shared = useShared7(input);
  const keyed = useMemo(() => searchUtil1(items, "id"), [items]);
  useEffect(() => { if (data) setItems(data); }, [data]);
  return { items, keyed, shared, prefix: SEARCH_PREFIX_1 };
}
