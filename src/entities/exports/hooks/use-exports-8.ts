
import { useEffect, useState, useMemo } from "react";
import _ from "lodash";
import { useQuery } from "@tanstack/react-query";
import { exportsUtil3, EXPORTS_PREFIX_3 } from "../utils/exports-util-3";
import { useShared9 } from "../../../shared/hooks/use-shared-9";
export function useExports8(input) {
  const [items, setItems] = useState([]);
  const { data } = useQuery({ queryKey: ["exports", 8, input], queryFn: async () => [] });
  const shared = useShared9(input);
  const keyed = useMemo(() => exportsUtil3(items, "id"), [items]);
  useEffect(() => { if (data) setItems(data); }, [data]);
  return { items, keyed, shared, prefix: EXPORTS_PREFIX_3 };
}
