
import { useEffect, useState, useMemo } from "react";
import debounce from "lodash/debounce";
import { useQuery } from "@tanstack/react-query";
import { libraryUtil6, LIBRARY_PREFIX_6 } from "../utils/library-util-6";
import { useShared6 } from "../../../shared/hooks/use-shared-6";
export function useLibrary5(input) {
  const [items, setItems] = useState([]);
  const { data } = useQuery({ queryKey: ["library", 5, input], queryFn: async () => [] });
  const shared = useShared6(input);
  const keyed = useMemo(() => libraryUtil6(items, "id"), [items]);
  useEffect(() => { if (data) setItems(data); }, [data]);
  return { items, keyed, shared, prefix: LIBRARY_PREFIX_6 };
}
