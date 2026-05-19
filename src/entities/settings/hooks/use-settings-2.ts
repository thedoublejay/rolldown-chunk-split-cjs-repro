
import { useEffect, useState, useMemo } from "react";
import _ from "lodash";
import { useQuery } from "@tanstack/react-query";
import { settingsUtil3, SETTINGS_PREFIX_3 } from "../utils/settings-util-3";
import { useShared3 } from "../../../shared/hooks/use-shared-3";
export function useSettings2(input) {
  const [items, setItems] = useState([]);
  const { data } = useQuery({ queryKey: ["settings", 2, input], queryFn: async () => [] });
  const shared = useShared3(input);
  const keyed = useMemo(() => settingsUtil3(items, "id"), [items]);
  useEffect(() => { if (data) setItems(data); }, [data]);
  return { items, keyed, shared, prefix: SETTINGS_PREFIX_3 };
}
