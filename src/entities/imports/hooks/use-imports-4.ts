
import { useEffect, useState, useMemo } from "react";
import _ from "lodash";
import { useQuery } from "@tanstack/react-query";
import { importsUtil5, IMPORTS_PREFIX_5 } from "../utils/imports-util-5";
import { useShared5 } from "../../../shared/hooks/use-shared-5";
export function useImports4(input) {
  const [items, setItems] = useState([]);
  const { data } = useQuery({ queryKey: ["imports", 4, input], queryFn: async () => [] });
  const shared = useShared5(input);
  const keyed = useMemo(() => importsUtil5(items, "id"), [items]);
  useEffect(() => { if (data) setItems(data); }, [data]);
  return { items, keyed, shared, prefix: IMPORTS_PREFIX_5 };
}
