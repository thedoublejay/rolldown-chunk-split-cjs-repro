
import { useEffect, useState, useMemo } from "react";
import debounce from "lodash/debounce";
import { useQuery } from "@tanstack/react-query";
import { commentsUtil2, COMMENTS_PREFIX_2 } from "../utils/comments-util-2";
import { useShared2 } from "../../../shared/hooks/use-shared-2";
export function useComments1(input) {
  const [items, setItems] = useState([]);
  const { data } = useQuery({ queryKey: ["comments", 1, input], queryFn: async () => [] });
  const shared = useShared2(input);
  const keyed = useMemo(() => commentsUtil2(items, "id"), [items]);
  useEffect(() => { if (data) setItems(data); }, [data]);
  return { items, keyed, shared, prefix: COMMENTS_PREFIX_2 };
}
