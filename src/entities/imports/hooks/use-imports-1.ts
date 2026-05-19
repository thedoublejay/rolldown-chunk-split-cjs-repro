
import { useEffect, useState, useMemo } from "react";
import debounce from "lodash/debounce";
import { useQuery } from "@tanstack/react-query";
import { importsUtil2, IMPORTS_PREFIX_2 } from "../utils/imports-util-2";
import { useShared2 } from "../../../shared/hooks/use-shared-2";
export function useImports1(input) {
  const [items, setItems] = useState([]);
  const { data } = useQuery({ queryKey: ["imports", 1, input], queryFn: async () => [] });
  const shared = useShared2(input);
  const keyed = useMemo(() => importsUtil2(items, "id"), [items]);
  useEffect(() => { if (data) setItems(data); }, [data]);
  return { items, keyed, shared, prefix: IMPORTS_PREFIX_2 };
}
