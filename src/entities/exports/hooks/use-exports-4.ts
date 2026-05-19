
import { useEffect, useState, useMemo } from "react";
import _ from "lodash";
import { useQuery } from "@tanstack/react-query";
import { exportsUtil5, EXPORTS_PREFIX_5 } from "../utils/exports-util-5";
import { useShared5 } from "../../../shared/hooks/use-shared-5";
export function useExports4(input) {
  const [items, setItems] = useState([]);
  const { data } = useQuery({ queryKey: ["exports", 4, input], queryFn: async () => [] });
  const shared = useShared5(input);
  const keyed = useMemo(() => exportsUtil5(items, "id"), [items]);
  useEffect(() => { if (data) setItems(data); }, [data]);
  return { items, keyed, shared, prefix: EXPORTS_PREFIX_5 };
}
