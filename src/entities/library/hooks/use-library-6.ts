
import { useEffect, useState, useMemo } from "react";
import _ from "lodash";
import { useQuery } from "@tanstack/react-query";
import { libraryUtil1, LIBRARY_PREFIX_1 } from "../utils/library-util-1";
import { useShared7 } from "../../../shared/hooks/use-shared-7";
export function useLibrary6(input) {
  const [items, setItems] = useState([]);
  const { data } = useQuery({ queryKey: ["library", 6, input], queryFn: async () => [] });
  const shared = useShared7(input);
  const keyed = useMemo(() => libraryUtil1(items, "id"), [items]);
  useEffect(() => { if (data) setItems(data); }, [data]);
  return { items, keyed, shared, prefix: LIBRARY_PREFIX_1 };
}
