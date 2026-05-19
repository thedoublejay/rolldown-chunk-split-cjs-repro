
import { useEffect, useState, useMemo } from "react";
import debounce from "lodash/debounce";
import { useQuery } from "@tanstack/react-query";
import { importsUtil2, IMPORTS_PREFIX_2 } from "../utils/imports-util-2";
import { useShared8 } from "../../../shared/hooks/use-shared-8";
export function useImports7(input) {
  const [items, setItems] = useState([]);
  const { data } = useQuery({ queryKey: ["imports", 7, input], queryFn: async () => [] });
  const shared = useShared8(input);
  const keyed = useMemo(() => importsUtil2(items, "id"), [items]);
  useEffect(() => { if (data) setItems(data); }, [data]);
  return { items, keyed, shared, prefix: IMPORTS_PREFIX_2 };
}
