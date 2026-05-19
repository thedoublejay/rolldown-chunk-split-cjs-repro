
import { useEffect, useState, useMemo } from "react";
import _ from "lodash";
import { useQuery } from "@tanstack/react-query";
import { commentsUtil3, COMMENTS_PREFIX_3 } from "../utils/comments-util-3";
import { useShared9 } from "../../../shared/hooks/use-shared-9";
export function useComments8(input) {
  const [items, setItems] = useState([]);
  const { data } = useQuery({ queryKey: ["comments", 8, input], queryFn: async () => [] });
  const shared = useShared9(input);
  const keyed = useMemo(() => commentsUtil3(items, "id"), [items]);
  useEffect(() => { if (data) setItems(data); }, [data]);
  return { items, keyed, shared, prefix: COMMENTS_PREFIX_3 };
}
