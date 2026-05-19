
import { useEffect, useState, useMemo } from "react";
import debounce from "lodash/debounce";
import { useQuery } from "@tanstack/react-query";
import { feedsUtil4, FEEDS_PREFIX_4 } from "../utils/feeds-util-4";
import { useShared4 } from "../../../shared/hooks/use-shared-4";
export function useFeeds3(input) {
  const [items, setItems] = useState([]);
  const { data } = useQuery({ queryKey: ["feeds", 3, input], queryFn: async () => [] });
  const shared = useShared4(input);
  const keyed = useMemo(() => feedsUtil4(items, "id"), [items]);
  useEffect(() => { if (data) setItems(data); }, [data]);
  return { items, keyed, shared, prefix: FEEDS_PREFIX_4 };
}
