
import { useEffect, useState, useMemo } from "react";
import debounce from "lodash/debounce";
import { useQuery } from "@tanstack/react-query";
import { exportsUtil2, EXPORTS_PREFIX_2 } from "../utils/exports-util-2";
import { useShared8 } from "../../../shared/hooks/use-shared-8";
export function useExports7(input) {
  const [items, setItems] = useState([]);
  const { data } = useQuery({ queryKey: ["exports", 7, input], queryFn: async () => [] });
  const shared = useShared8(input);
  const keyed = useMemo(() => exportsUtil2(items, "id"), [items]);
  useEffect(() => { if (data) setItems(data); }, [data]);
  return { items, keyed, shared, prefix: EXPORTS_PREFIX_2 };
}
