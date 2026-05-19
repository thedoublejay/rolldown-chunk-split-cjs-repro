
import { useEffect, useState, useMemo } from "react";
import _ from "lodash";
import { useQuery } from "@tanstack/react-query";
import { searchUtil3, SEARCH_PREFIX_3 } from "../utils/search-util-3";
import { useShared9 } from "../../../shared/hooks/use-shared-9";
export function useSearch8(input) {
  const [items, setItems] = useState([]);
  const { data } = useQuery({ queryKey: ["search", 8, input], queryFn: async () => [] });
  const shared = useShared9(input);
  const keyed = useMemo(() => searchUtil3(items, "id"), [items]);
  useEffect(() => { if (data) setItems(data); }, [data]);
  return { items, keyed, shared, prefix: SEARCH_PREFIX_3 };
}
