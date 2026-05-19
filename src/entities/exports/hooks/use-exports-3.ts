
import { useEffect, useState, useMemo } from "react";
import debounce from "lodash/debounce";
import { useQuery } from "@tanstack/react-query";
import { exportsUtil4, EXPORTS_PREFIX_4 } from "../utils/exports-util-4";
import { useShared4 } from "../../../shared/hooks/use-shared-4";
export function useExports3(input) {
  const [items, setItems] = useState([]);
  const { data } = useQuery({ queryKey: ["exports", 3, input], queryFn: async () => [] });
  const shared = useShared4(input);
  const keyed = useMemo(() => exportsUtil4(items, "id"), [items]);
  useEffect(() => { if (data) setItems(data); }, [data]);
  return { items, keyed, shared, prefix: EXPORTS_PREFIX_4 };
}
