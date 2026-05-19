
import { useEffect, useState, useMemo } from "react";
import debounce from "lodash/debounce";
import { useQuery } from "@tanstack/react-query";
import { settingsUtil4, SETTINGS_PREFIX_4 } from "../utils/settings-util-4";
import { useShared4 } from "../../../shared/hooks/use-shared-4";
export function useSettings3(input) {
  const [items, setItems] = useState([]);
  const { data } = useQuery({ queryKey: ["settings", 3, input], queryFn: async () => [] });
  const shared = useShared4(input);
  const keyed = useMemo(() => settingsUtil4(items, "id"), [items]);
  useEffect(() => { if (data) setItems(data); }, [data]);
  return { items, keyed, shared, prefix: SETTINGS_PREFIX_4 };
}
