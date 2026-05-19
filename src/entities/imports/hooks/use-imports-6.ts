
import { useEffect, useState, useMemo } from "react";
import _ from "lodash";
import { useQuery } from "@tanstack/react-query";
import { importsUtil1, IMPORTS_PREFIX_1 } from "../utils/imports-util-1";
import { useShared7 } from "../../../shared/hooks/use-shared-7";
export function useImports6(input) {
  const [items, setItems] = useState([]);
  const { data } = useQuery({ queryKey: ["imports", 6, input], queryFn: async () => [] });
  const shared = useShared7(input);
  const keyed = useMemo(() => importsUtil1(items, "id"), [items]);
  useEffect(() => { if (data) setItems(data); }, [data]);
  return { items, keyed, shared, prefix: IMPORTS_PREFIX_1 };
}
