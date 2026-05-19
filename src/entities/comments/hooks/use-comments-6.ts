
import { useEffect, useState, useMemo } from "react";
import _ from "lodash";
import { useQuery } from "@tanstack/react-query";
import { commentsUtil1, COMMENTS_PREFIX_1 } from "../utils/comments-util-1";
import { useShared7 } from "../../../shared/hooks/use-shared-7";
export function useComments6(input) {
  const [items, setItems] = useState([]);
  const { data } = useQuery({ queryKey: ["comments", 6, input], queryFn: async () => [] });
  const shared = useShared7(input);
  const keyed = useMemo(() => commentsUtil1(items, "id"), [items]);
  useEffect(() => { if (data) setItems(data); }, [data]);
  return { items, keyed, shared, prefix: COMMENTS_PREFIX_1 };
}
