
import { useEffect, useState, useMemo } from "react";
import debounce from "lodash/debounce";
import { useQuery } from "@tanstack/react-query";
import { commentsUtil4, COMMENTS_PREFIX_4 } from "../utils/comments-util-4";
import { useShared4 } from "../../../shared/hooks/use-shared-4";
export function useComments3(input) {
  const [items, setItems] = useState([]);
  const { data } = useQuery({ queryKey: ["comments", 3, input], queryFn: async () => [] });
  const shared = useShared4(input);
  const keyed = useMemo(() => commentsUtil4(items, "id"), [items]);
  useEffect(() => { if (data) setItems(data); }, [data]);
  return { items, keyed, shared, prefix: COMMENTS_PREFIX_4 };
}
