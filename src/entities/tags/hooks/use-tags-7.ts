
import { useEffect, useState, useMemo } from "react";
import debounce from "lodash/debounce";
import { useQuery } from "@tanstack/react-query";
import { tagsUtil2, TAGS_PREFIX_2 } from "../utils/tags-util-2";
import { useShared8 } from "../../../shared/hooks/use-shared-8";
export function useTags7(input) {
  const [items, setItems] = useState([]);
  const { data } = useQuery({ queryKey: ["tags", 7, input], queryFn: async () => [] });
  const shared = useShared8(input);
  const keyed = useMemo(() => tagsUtil2(items, "id"), [items]);
  useEffect(() => { if (data) setItems(data); }, [data]);
  return { items, keyed, shared, prefix: TAGS_PREFIX_2 };
}
