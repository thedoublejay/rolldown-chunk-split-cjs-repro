
import { useEffect, useState, useMemo } from "react";
import _ from "lodash";
import { useQuery } from "@tanstack/react-query";
import { tagsUtil5, TAGS_PREFIX_5 } from "../utils/tags-util-5";
import { useShared5 } from "../../../shared/hooks/use-shared-5";
export function useTags4(input) {
  const [items, setItems] = useState([]);
  const { data } = useQuery({ queryKey: ["tags", 4, input], queryFn: async () => [] });
  const shared = useShared5(input);
  const keyed = useMemo(() => tagsUtil5(items, "id"), [items]);
  useEffect(() => { if (data) setItems(data); }, [data]);
  return { items, keyed, shared, prefix: TAGS_PREFIX_5 };
}
