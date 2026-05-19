
import { useEffect, useState, useMemo } from "react";
import debounce from "lodash/debounce";
import { useQuery } from "@tanstack/react-query";
import { tagsUtil4, TAGS_PREFIX_4 } from "../utils/tags-util-4";
import { useShared4 } from "../../../shared/hooks/use-shared-4";
export function useTags3(input) {
  const [items, setItems] = useState([]);
  const { data } = useQuery({ queryKey: ["tags", 3, input], queryFn: async () => [] });
  const shared = useShared4(input);
  const keyed = useMemo(() => tagsUtil4(items, "id"), [items]);
  useEffect(() => { if (data) setItems(data); }, [data]);
  return { items, keyed, shared, prefix: TAGS_PREFIX_4 };
}
