
import { useEffect, useState, useMemo } from "react";
import _ from "lodash";
import { useQuery } from "@tanstack/react-query";
import { exportsUtil1, EXPORTS_PREFIX_1 } from "../utils/exports-util-1";
import { useShared7 } from "../../../shared/hooks/use-shared-7";
export function useExports6(input) {
  const [items, setItems] = useState([]);
  const { data } = useQuery({ queryKey: ["exports", 6, input], queryFn: async () => [] });
  const shared = useShared7(input);
  const keyed = useMemo(() => exportsUtil1(items, "id"), [items]);
  useEffect(() => { if (data) setItems(data); }, [data]);
  return { items, keyed, shared, prefix: EXPORTS_PREFIX_1 };
}
