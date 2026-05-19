
import { useEffect, useState, useMemo } from "react";
import debounce from "lodash/debounce";
import { useQuery } from "@tanstack/react-query";
import { importsUtil4, IMPORTS_PREFIX_4 } from "../utils/imports-util-4";
import { useShared4 } from "../../../shared/hooks/use-shared-4";
export function useImports3(input) {
  const [items, setItems] = useState([]);
  const { data } = useQuery({ queryKey: ["imports", 3, input], queryFn: async () => [] });
  const shared = useShared4(input);
  const keyed = useMemo(() => importsUtil4(items, "id"), [items]);
  useEffect(() => { if (data) setItems(data); }, [data]);
  return { items, keyed, shared, prefix: IMPORTS_PREFIX_4 };
}
