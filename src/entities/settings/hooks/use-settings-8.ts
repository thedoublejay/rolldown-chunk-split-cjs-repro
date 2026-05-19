
import { useEffect, useState, useMemo } from "react";
import _ from "lodash";
import { useQuery } from "@tanstack/react-query";
import { settingsUtil3, SETTINGS_PREFIX_3 } from "../utils/settings-util-3";
import { useShared9 } from "../../../shared/hooks/use-shared-9";
export function useSettings8(input) {
  const [items, setItems] = useState([]);
  const { data } = useQuery({ queryKey: ["settings", 8, input], queryFn: async () => [] });
  const shared = useShared9(input);
  const keyed = useMemo(() => settingsUtil3(items, "id"), [items]);
  useEffect(() => { if (data) setItems(data); }, [data]);
  return { items, keyed, shared, prefix: SETTINGS_PREFIX_3 };
}
