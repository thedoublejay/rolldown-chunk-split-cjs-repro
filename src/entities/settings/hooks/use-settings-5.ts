
import { useEffect, useState, useMemo } from "react";
import debounce from "lodash/debounce";
import { useQuery } from "@tanstack/react-query";
import { settingsUtil6, SETTINGS_PREFIX_6 } from "../utils/settings-util-6";
import { useShared6 } from "../../../shared/hooks/use-shared-6";
export function useSettings5(input) {
  const [items, setItems] = useState([]);
  const { data } = useQuery({ queryKey: ["settings", 5, input], queryFn: async () => [] });
  const shared = useShared6(input);
  const keyed = useMemo(() => settingsUtil6(items, "id"), [items]);
  useEffect(() => { if (data) setItems(data); }, [data]);
  return { items, keyed, shared, prefix: SETTINGS_PREFIX_6 };
}
