
import { useEffect, useState, useMemo } from "react";
import _ from "lodash";
import { useQuery } from "@tanstack/react-query";
import { commentsUtil5, COMMENTS_PREFIX_5 } from "../utils/comments-util-5";
import { useShared5 } from "../../../shared/hooks/use-shared-5";
export function useComments4(input) {
  const [items, setItems] = useState([]);
  const { data } = useQuery({ queryKey: ["comments", 4, input], queryFn: async () => [] });
  const shared = useShared5(input);
  const keyed = useMemo(() => commentsUtil5(items, "id"), [items]);
  useEffect(() => { if (data) setItems(data); }, [data]);
  return { items, keyed, shared, prefix: COMMENTS_PREFIX_5 };
}
