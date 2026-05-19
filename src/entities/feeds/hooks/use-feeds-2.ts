
import { useEffect, useState, useMemo } from "react";
import _ from "lodash";
import { useQuery } from "@tanstack/react-query";
import { feedsUtil3, FEEDS_PREFIX_3 } from "../utils/feeds-util-3";
import { useShared3 } from "../../../shared/hooks/use-shared-3";
export function useFeeds2(input) {
  const [items, setItems] = useState([]);
  const { data } = useQuery({ queryKey: ["feeds", 2, input], queryFn: async () => [] });
  const shared = useShared3(input);
  const keyed = useMemo(() => feedsUtil3(items, "id"), [items]);
  useEffect(() => { if (data) setItems(data); }, [data]);
  return { items, keyed, shared, prefix: FEEDS_PREFIX_3 };
}
