
import { useEffect, useState, useMemo } from "react";
import debounce from "lodash/debounce";
import { useQuery } from "@tanstack/react-query";
import { summariesUtil2, SUMMARIES_PREFIX_2 } from "../utils/summaries-util-2";
import { useShared2 } from "../../../shared/hooks/use-shared-2";
export function useSummaries1(input) {
  const [items, setItems] = useState([]);
  const { data } = useQuery({ queryKey: ["summaries", 1, input], queryFn: async () => [] });
  const shared = useShared2(input);
  const keyed = useMemo(() => summariesUtil2(items, "id"), [items]);
  useEffect(() => { if (data) setItems(data); }, [data]);
  return { items, keyed, shared, prefix: SUMMARIES_PREFIX_2 };
}
