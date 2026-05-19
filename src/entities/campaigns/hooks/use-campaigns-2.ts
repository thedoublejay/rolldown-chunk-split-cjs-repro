
import { useEffect, useState, useMemo } from "react";
import _ from "lodash";
import { useQuery } from "@tanstack/react-query";
import { campaignsUtil3, CAMPAIGNS_PREFIX_3 } from "../utils/campaigns-util-3";
import { useShared3 } from "../../../shared/hooks/use-shared-3";
export function useCampaigns2(input) {
  const [items, setItems] = useState([]);
  const { data } = useQuery({ queryKey: ["campaigns", 2, input], queryFn: async () => [] });
  const shared = useShared3(input);
  const keyed = useMemo(() => campaignsUtil3(items, "id"), [items]);
  useEffect(() => { if (data) setItems(data); }, [data]);
  return { items, keyed, shared, prefix: CAMPAIGNS_PREFIX_3 };
}
