
import { useEffect, useState, useMemo } from "react";
import _ from "lodash";
import { useQuery } from "@tanstack/react-query";
import { tagsUtil1, TAGS_PREFIX_1 } from "../utils/tags-util-1";
import { useShared7 } from "../../../shared/hooks/use-shared-7";
export function useTags6(input) {
  const [items, setItems] = useState([]);
  const { data } = useQuery({ queryKey: ["tags", 6, input], queryFn: async () => [] });
  const shared = useShared7(input);
  const keyed = useMemo(() => tagsUtil1(items, "id"), [items]);
  useEffect(() => { if (data) setItems(data); }, [data]);
  return { items, keyed, shared, prefix: TAGS_PREFIX_1 };
}
