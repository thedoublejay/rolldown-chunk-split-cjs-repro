
import { useEffect, useState, useMemo } from "react";
import debounce from "lodash/debounce";
import { useQuery } from "@tanstack/react-query";
import { feedsUtil6, FEEDS_PREFIX_6 } from "../utils/feeds-util-6";
import { useShared6 } from "../../../shared/hooks/use-shared-6";
export function useFeeds5(input) {
  const [items, setItems] = useState([]);
  const { data } = useQuery({ queryKey: ["feeds", 5, input], queryFn: async () => [] });
  const shared = useShared6(input);
  const keyed = useMemo(() => feedsUtil6(items, "id"), [items]);
  useEffect(() => { if (data) setItems(data); }, [data]);
  return { items, keyed, shared, prefix: FEEDS_PREFIX_6 };
}
