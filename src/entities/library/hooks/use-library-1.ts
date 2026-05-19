
import { useEffect, useState, useMemo } from "react";
import debounce from "lodash/debounce";
import { useQuery } from "@tanstack/react-query";
import { libraryUtil2, LIBRARY_PREFIX_2 } from "../utils/library-util-2";
import { useShared2 } from "../../../shared/hooks/use-shared-2";
export function useLibrary1(input) {
  const [items, setItems] = useState([]);
  const { data } = useQuery({ queryKey: ["library", 1, input], queryFn: async () => [] });
  const shared = useShared2(input);
  const keyed = useMemo(() => libraryUtil2(items, "id"), [items]);
  useEffect(() => { if (data) setItems(data); }, [data]);
  return { items, keyed, shared, prefix: LIBRARY_PREFIX_2 };
}
