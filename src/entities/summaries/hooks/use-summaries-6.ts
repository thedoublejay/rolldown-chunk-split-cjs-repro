
import { useEffect, useState, useMemo } from "react";
import _ from "lodash";
import { useQuery } from "@tanstack/react-query";
import { summariesUtil1, SUMMARIES_PREFIX_1 } from "../utils/summaries-util-1";
import { useShared7 } from "../../../shared/hooks/use-shared-7";
export function useSummaries6(input) {
  const [items, setItems] = useState([]);
  const { data } = useQuery({ queryKey: ["summaries", 6, input], queryFn: async () => [] });
  const shared = useShared7(input);
  const keyed = useMemo(() => summariesUtil1(items, "id"), [items]);
  useEffect(() => { if (data) setItems(data); }, [data]);
  return { items, keyed, shared, prefix: SUMMARIES_PREFIX_1 };
}
