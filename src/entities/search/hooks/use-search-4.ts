
import { useEffect, useState, useMemo } from "react";
import _ from "lodash";
import { useQuery } from "@tanstack/react-query";
import { searchUtil5, SEARCH_PREFIX_5 } from "../utils/search-util-5";
import { useShared5 } from "../../../shared/hooks/use-shared-5";
export function useSearch4(input) {
  const [items, setItems] = useState([]);
  const { data } = useQuery({ queryKey: ["search", 4, input], queryFn: async () => [] });
  const shared = useShared5(input);
  const keyed = useMemo(() => searchUtil5(items, "id"), [items]);
  useEffect(() => { if (data) setItems(data); }, [data]);
  return { items, keyed, shared, prefix: SEARCH_PREFIX_5 };
}
