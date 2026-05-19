
import { useEffect, useState, useMemo } from "react";
import _ from "lodash";
import { useQuery } from "@tanstack/react-query";
import { libraryUtil5, LIBRARY_PREFIX_5 } from "../utils/library-util-5";
import { useShared5 } from "../../../shared/hooks/use-shared-5";
export function useLibrary4(input) {
  const [items, setItems] = useState([]);
  const { data } = useQuery({ queryKey: ["library", 4, input], queryFn: async () => [] });
  const shared = useShared5(input);
  const keyed = useMemo(() => libraryUtil5(items, "id"), [items]);
  useEffect(() => { if (data) setItems(data); }, [data]);
  return { items, keyed, shared, prefix: LIBRARY_PREFIX_5 };
}
