
import { useEffect, useState, useMemo } from "react";
import _ from "lodash";
import { useQuery } from "@tanstack/react-query";
import { libraryUtil3, LIBRARY_PREFIX_3 } from "../utils/library-util-3";
import { useShared3 } from "../../../shared/hooks/use-shared-3";
export function useLibrary2(input) {
  const [items, setItems] = useState([]);
  const { data } = useQuery({ queryKey: ["library", 2, input], queryFn: async () => [] });
  const shared = useShared3(input);
  const keyed = useMemo(() => libraryUtil3(items, "id"), [items]);
  useEffect(() => { if (data) setItems(data); }, [data]);
  return { items, keyed, shared, prefix: LIBRARY_PREFIX_3 };
}
