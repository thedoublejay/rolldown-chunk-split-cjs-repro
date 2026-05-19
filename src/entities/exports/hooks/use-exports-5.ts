
import { useEffect, useState, useMemo } from "react";
import debounce from "lodash/debounce";
import { useQuery } from "@tanstack/react-query";
import { exportsUtil6, EXPORTS_PREFIX_6 } from "../utils/exports-util-6";
import { useShared6 } from "../../../shared/hooks/use-shared-6";
export function useExports5(input) {
  const [items, setItems] = useState([]);
  const { data } = useQuery({ queryKey: ["exports", 5, input], queryFn: async () => [] });
  const shared = useShared6(input);
  const keyed = useMemo(() => exportsUtil6(items, "id"), [items]);
  useEffect(() => { if (data) setItems(data); }, [data]);
  return { items, keyed, shared, prefix: EXPORTS_PREFIX_6 };
}
