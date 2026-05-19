
import { useEffect, useState, useMemo } from "react";
import _ from "lodash";
import { useQuery } from "@tanstack/react-query";
import { settingsUtil5, SETTINGS_PREFIX_5 } from "../utils/settings-util-5";
import { useShared5 } from "../../../shared/hooks/use-shared-5";
export function useSettings4(input) {
  const [items, setItems] = useState([]);
  const { data } = useQuery({ queryKey: ["settings", 4, input], queryFn: async () => [] });
  const shared = useShared5(input);
  const keyed = useMemo(() => settingsUtil5(items, "id"), [items]);
  useEffect(() => { if (data) setItems(data); }, [data]);
  return { items, keyed, shared, prefix: SETTINGS_PREFIX_5 };
}
