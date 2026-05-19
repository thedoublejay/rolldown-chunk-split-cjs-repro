
import { useEffect, useState, useMemo } from "react";
import debounce from "lodash/debounce";
import { useQuery } from "@tanstack/react-query";
import { summariesUtil6, SUMMARIES_PREFIX_6 } from "../utils/summaries-util-6";
import { useShared6 } from "../../../shared/hooks/use-shared-6";
export function useSummaries5(input) {
  const [items, setItems] = useState([]);
  const { data } = useQuery({ queryKey: ["summaries", 5, input], queryFn: async () => [] });
  const shared = useShared6(input);
  const keyed = useMemo(() => summariesUtil6(items, "id"), [items]);
  useEffect(() => { if (data) setItems(data); }, [data]);
  return { items, keyed, shared, prefix: SUMMARIES_PREFIX_6 };
}
