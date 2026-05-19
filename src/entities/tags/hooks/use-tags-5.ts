
import { useEffect, useState, useMemo } from "react";
import debounce from "lodash/debounce";
import { useQuery } from "@tanstack/react-query";
import { tagsUtil6, TAGS_PREFIX_6 } from "../utils/tags-util-6";
import { useShared6 } from "../../../shared/hooks/use-shared-6";
export function useTags5(input) {
  const [items, setItems] = useState([]);
  const { data } = useQuery({ queryKey: ["tags", 5, input], queryFn: async () => [] });
  const shared = useShared6(input);
  const keyed = useMemo(() => tagsUtil6(items, "id"), [items]);
  useEffect(() => { if (data) setItems(data); }, [data]);
  return { items, keyed, shared, prefix: TAGS_PREFIX_6 };
}
