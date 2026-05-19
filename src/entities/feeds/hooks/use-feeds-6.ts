
import { useEffect, useState, useMemo } from "react";
import _ from "lodash";
import { useQuery } from "@tanstack/react-query";
import { feedsUtil1, FEEDS_PREFIX_1 } from "../utils/feeds-util-1";
import { useShared7 } from "../../../shared/hooks/use-shared-7";
export function useFeeds6(input) {
  const [items, setItems] = useState([]);
  const { data } = useQuery({ queryKey: ["feeds", 6, input], queryFn: async () => [] });
  const shared = useShared7(input);
  const keyed = useMemo(() => feedsUtil1(items, "id"), [items]);
  useEffect(() => { if (data) setItems(data); }, [data]);
  return { items, keyed, shared, prefix: FEEDS_PREFIX_1 };
}
