
import { useEffect, useState, useMemo } from "react";
import _ from "lodash";
import { useQuery } from "@tanstack/react-query";
import { tagsUtil3, TAGS_PREFIX_3 } from "../utils/tags-util-3";
import { useShared3 } from "../../../shared/hooks/use-shared-3";
export function useTags2(input) {
  const [items, setItems] = useState([]);
  const { data } = useQuery({ queryKey: ["tags", 2, input], queryFn: async () => [] });
  const shared = useShared3(input);
  const keyed = useMemo(() => tagsUtil3(items, "id"), [items]);
  useEffect(() => { if (data) setItems(data); }, [data]);
  return { items, keyed, shared, prefix: TAGS_PREFIX_3 };
}
