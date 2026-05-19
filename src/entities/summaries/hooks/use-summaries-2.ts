
import { useEffect, useState, useMemo } from "react";
import _ from "lodash";
import { useQuery } from "@tanstack/react-query";
import { summariesUtil3, SUMMARIES_PREFIX_3 } from "../utils/summaries-util-3";
import { useShared3 } from "../../../shared/hooks/use-shared-3";
export function useSummaries2(input) {
  const [items, setItems] = useState([]);
  const { data } = useQuery({ queryKey: ["summaries", 2, input], queryFn: async () => [] });
  const shared = useShared3(input);
  const keyed = useMemo(() => summariesUtil3(items, "id"), [items]);
  useEffect(() => { if (data) setItems(data); }, [data]);
  return { items, keyed, shared, prefix: SUMMARIES_PREFIX_3 };
}
