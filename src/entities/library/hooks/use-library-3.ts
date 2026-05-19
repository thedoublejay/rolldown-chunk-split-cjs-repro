
import { useEffect, useState, useMemo } from "react";
import debounce from "lodash/debounce";
import { useQuery } from "@tanstack/react-query";
import { libraryUtil4, LIBRARY_PREFIX_4 } from "../utils/library-util-4";
import { useShared4 } from "../../../shared/hooks/use-shared-4";
export function useLibrary3(input) {
  const [items, setItems] = useState([]);
  const { data } = useQuery({ queryKey: ["library", 3, input], queryFn: async () => [] });
  const shared = useShared4(input);
  const keyed = useMemo(() => libraryUtil4(items, "id"), [items]);
  useEffect(() => { if (data) setItems(data); }, [data]);
  return { items, keyed, shared, prefix: LIBRARY_PREFIX_4 };
}
