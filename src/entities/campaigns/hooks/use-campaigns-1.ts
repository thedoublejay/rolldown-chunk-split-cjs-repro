
import { useEffect, useState, useMemo } from "react";
import debounce from "lodash/debounce";
import { useQuery } from "@tanstack/react-query";
import { campaignsUtil2, CAMPAIGNS_PREFIX_2 } from "../utils/campaigns-util-2";
import { useShared2 } from "../../../shared/hooks/use-shared-2";
export function useCampaigns1(input) {
  const [items, setItems] = useState([]);
  const { data } = useQuery({ queryKey: ["campaigns", 1, input], queryFn: async () => [] });
  const shared = useShared2(input);
  const keyed = useMemo(() => campaignsUtil2(items, "id"), [items]);
  useEffect(() => { if (data) setItems(data); }, [data]);
  return { items, keyed, shared, prefix: CAMPAIGNS_PREFIX_2 };
}
