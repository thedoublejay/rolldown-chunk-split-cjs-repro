
import { useEffect, useState, useMemo } from "react";
import _ from "lodash";
import { useQuery } from "@tanstack/react-query";
import { tagsUtil3, TAGS_PREFIX_3 } from "../utils/tags-util-3";
import { useShared9 } from "../../../shared/hooks/use-shared-9";
export function useTags8(input) {
  const [items, setItems] = useState([]);
  const { data } = useQuery({ queryKey: ["tags", 8, input], queryFn: async () => [] });
  const shared = useShared9(input);
  const keyed = useMemo(() => tagsUtil3(items, "id"), [items]);
  useEffect(() => { if (data) setItems(data); }, [data]);
  return { items, keyed, shared, prefix: TAGS_PREFIX_3 };
}
