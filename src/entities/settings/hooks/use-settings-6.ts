
import { useEffect, useState, useMemo } from "react";
import _ from "lodash";
import { useQuery } from "@tanstack/react-query";
import { settingsUtil1, SETTINGS_PREFIX_1 } from "../utils/settings-util-1";
import { useShared7 } from "../../../shared/hooks/use-shared-7";
export function useSettings6(input) {
  const [items, setItems] = useState([]);
  const { data } = useQuery({ queryKey: ["settings", 6, input], queryFn: async () => [] });
  const shared = useShared7(input);
  const keyed = useMemo(() => settingsUtil1(items, "id"), [items]);
  useEffect(() => { if (data) setItems(data); }, [data]);
  return { items, keyed, shared, prefix: SETTINGS_PREFIX_1 };
}
