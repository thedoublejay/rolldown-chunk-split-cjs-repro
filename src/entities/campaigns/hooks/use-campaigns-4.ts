
import { useEffect, useState, useMemo } from "react";
import _ from "lodash";
import { useQuery } from "@tanstack/react-query";
import { campaignsUtil5, CAMPAIGNS_PREFIX_5 } from "../utils/campaigns-util-5";
import { useShared5 } from "../../../shared/hooks/use-shared-5";
export function useCampaigns4(input) {
  const [items, setItems] = useState([]);
  const { data } = useQuery({ queryKey: ["campaigns", 4, input], queryFn: async () => [] });
  const shared = useShared5(input);
  const keyed = useMemo(() => campaignsUtil5(items, "id"), [items]);
  useEffect(() => { if (data) setItems(data); }, [data]);
  return { items, keyed, shared, prefix: CAMPAIGNS_PREFIX_5 };
}
