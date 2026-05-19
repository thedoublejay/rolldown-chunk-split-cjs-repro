
import { useEffect, useState, useMemo } from "react";
import _ from "lodash";
import { useQuery } from "@tanstack/react-query";
import { importsUtil3, IMPORTS_PREFIX_3 } from "../utils/imports-util-3";
import { useShared3 } from "../../../shared/hooks/use-shared-3";
export function useImports2(input) {
  const [items, setItems] = useState([]);
  const { data } = useQuery({ queryKey: ["imports", 2, input], queryFn: async () => [] });
  const shared = useShared3(input);
  const keyed = useMemo(() => importsUtil3(items, "id"), [items]);
  useEffect(() => { if (data) setItems(data); }, [data]);
  return { items, keyed, shared, prefix: IMPORTS_PREFIX_3 };
}
