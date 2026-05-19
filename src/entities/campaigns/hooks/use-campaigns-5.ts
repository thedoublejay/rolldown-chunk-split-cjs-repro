
import { useEffect, useState, useMemo } from "react";
import debounce from "lodash/debounce";
import { useQuery } from "@tanstack/react-query";
import { campaignsUtil6, CAMPAIGNS_PREFIX_6 } from "../utils/campaigns-util-6";
import { useShared6 } from "../../../shared/hooks/use-shared-6";
export function useCampaigns5(input) {
  const [items, setItems] = useState([]);
  const { data } = useQuery({ queryKey: ["campaigns", 5, input], queryFn: async () => [] });
  const shared = useShared6(input);
  const keyed = useMemo(() => campaignsUtil6(items, "id"), [items]);
  useEffect(() => { if (data) setItems(data); }, [data]);
  return { items, keyed, shared, prefix: CAMPAIGNS_PREFIX_6 };
}
