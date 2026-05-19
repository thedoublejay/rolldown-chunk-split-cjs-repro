
import { useEffect, useState, useMemo } from "react";
import debounce from "lodash/debounce";
import { useQuery } from "@tanstack/react-query";
import { summariesUtil4, SUMMARIES_PREFIX_4 } from "../utils/summaries-util-4";
import { useShared4 } from "../../../shared/hooks/use-shared-4";
export function useSummaries3(input) {
  const [items, setItems] = useState([]);
  const { data } = useQuery({ queryKey: ["summaries", 3, input], queryFn: async () => [] });
  const shared = useShared4(input);
  const keyed = useMemo(() => summariesUtil4(items, "id"), [items]);
  useEffect(() => { if (data) setItems(data); }, [data]);
  return { items, keyed, shared, prefix: SUMMARIES_PREFIX_4 };
}
