
import { useEffect, useState, useMemo } from "react";
import _ from "lodash";
import { useQuery } from "@tanstack/react-query";
import { campaignsUtil1, CAMPAIGNS_PREFIX_1 } from "../utils/campaigns-util-1";
import { useShared7 } from "../../../shared/hooks/use-shared-7";
export function useCampaigns6(input) {
  const [items, setItems] = useState([]);
  const { data } = useQuery({ queryKey: ["campaigns", 6, input], queryFn: async () => [] });
  const shared = useShared7(input);
  const keyed = useMemo(() => campaignsUtil1(items, "id"), [items]);
  useEffect(() => { if (data) setItems(data); }, [data]);
  return { items, keyed, shared, prefix: CAMPAIGNS_PREFIX_1 };
}
