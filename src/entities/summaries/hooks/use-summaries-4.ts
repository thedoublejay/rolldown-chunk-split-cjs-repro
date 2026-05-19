
import { useEffect, useState, useMemo } from "react";
import _ from "lodash";
import { useQuery } from "@tanstack/react-query";
import { summariesUtil5, SUMMARIES_PREFIX_5 } from "../utils/summaries-util-5";
import { useShared5 } from "../../../shared/hooks/use-shared-5";
export function useSummaries4(input) {
  const [items, setItems] = useState([]);
  const { data } = useQuery({ queryKey: ["summaries", 4, input], queryFn: async () => [] });
  const shared = useShared5(input);
  const keyed = useMemo(() => summariesUtil5(items, "id"), [items]);
  useEffect(() => { if (data) setItems(data); }, [data]);
  return { items, keyed, shared, prefix: SUMMARIES_PREFIX_5 };
}
