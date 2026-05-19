
import { useEffect, useState, useMemo } from "react";
import debounce from "lodash/debounce";
import { useQuery } from "@tanstack/react-query";
import { campaignsUtil4, CAMPAIGNS_PREFIX_4 } from "../utils/campaigns-util-4";
import { useShared4 } from "../../../shared/hooks/use-shared-4";
export function useCampaigns3(input) {
  const [items, setItems] = useState([]);
  const { data } = useQuery({ queryKey: ["campaigns", 3, input], queryFn: async () => [] });
  const shared = useShared4(input);
  const keyed = useMemo(() => campaignsUtil4(items, "id"), [items]);
  useEffect(() => { if (data) setItems(data); }, [data]);
  return { items, keyed, shared, prefix: CAMPAIGNS_PREFIX_4 };
}
