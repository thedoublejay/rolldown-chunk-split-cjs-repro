
import { useEffect, useState, useMemo } from "react";
import _ from "lodash";
import { useQuery } from "@tanstack/react-query";
import { searchUtil3, SEARCH_PREFIX_3 } from "../utils/search-util-3";
import { useShared3 } from "../../../shared/hooks/use-shared-3";
export function useSearch2(input) {
  const [items, setItems] = useState([]);
  const { data } = useQuery({ queryKey: ["search", 2, input], queryFn: async () => [] });
  const shared = useShared3(input);
  const keyed = useMemo(() => searchUtil3(items, "id"), [items]);
  useEffect(() => { if (data) setItems(data); }, [data]);
  return { items, keyed, shared, prefix: SEARCH_PREFIX_3 };
}
