
import { useEffect, useState, useMemo } from "react";
import debounce from "lodash/debounce";
import { useQuery } from "@tanstack/react-query";
import { feedsUtil2, FEEDS_PREFIX_2 } from "../utils/feeds-util-2";
import { useShared8 } from "../../../shared/hooks/use-shared-8";
export function useFeeds7(input) {
  const [items, setItems] = useState([]);
  const { data } = useQuery({ queryKey: ["feeds", 7, input], queryFn: async () => [] });
  const shared = useShared8(input);
  const keyed = useMemo(() => feedsUtil2(items, "id"), [items]);
  useEffect(() => { if (data) setItems(data); }, [data]);
  return { items, keyed, shared, prefix: FEEDS_PREFIX_2 };
}
