
import { useEffect, useState, useMemo } from "react";
import debounce from "lodash/debounce";
import { useQuery } from "@tanstack/react-query";
import { settingsUtil2, SETTINGS_PREFIX_2 } from "../utils/settings-util-2";
import { useShared2 } from "../../../shared/hooks/use-shared-2";
export function useSettings1(input) {
  const [items, setItems] = useState([]);
  const { data } = useQuery({ queryKey: ["settings", 1, input], queryFn: async () => [] });
  const shared = useShared2(input);
  const keyed = useMemo(() => settingsUtil2(items, "id"), [items]);
  useEffect(() => { if (data) setItems(data); }, [data]);
  return { items, keyed, shared, prefix: SETTINGS_PREFIX_2 };
}
