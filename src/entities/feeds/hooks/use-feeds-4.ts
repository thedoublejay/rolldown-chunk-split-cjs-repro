
import { useEffect, useState, useMemo } from "react";
import _ from "lodash";
import { useQuery } from "@tanstack/react-query";
import { feedsUtil5, FEEDS_PREFIX_5 } from "../utils/feeds-util-5";
import { useShared5 } from "../../../shared/hooks/use-shared-5";
export function useFeeds4(input) {
  const [items, setItems] = useState([]);
  const { data } = useQuery({ queryKey: ["feeds", 4, input], queryFn: async () => [] });
  const shared = useShared5(input);
  const keyed = useMemo(() => feedsUtil5(items, "id"), [items]);
  useEffect(() => { if (data) setItems(data); }, [data]);
  return { items, keyed, shared, prefix: FEEDS_PREFIX_5 };
}
