
import { useEffect, useState, useMemo } from "react";
import debounce from "lodash/debounce";
import { useQuery } from "@tanstack/react-query";
import { commentsUtil6, COMMENTS_PREFIX_6 } from "../utils/comments-util-6";
import { useShared6 } from "../../../shared/hooks/use-shared-6";
export function useComments5(input) {
  const [items, setItems] = useState([]);
  const { data } = useQuery({ queryKey: ["comments", 5, input], queryFn: async () => [] });
  const shared = useShared6(input);
  const keyed = useMemo(() => commentsUtil6(items, "id"), [items]);
  useEffect(() => { if (data) setItems(data); }, [data]);
  return { items, keyed, shared, prefix: COMMENTS_PREFIX_6 };
}
