
import { useEffect, useState, useMemo } from "react";
import _ from "lodash";
import { useQuery } from "@tanstack/react-query";
import { reviewsUtil1, REVIEWS_PREFIX_1 } from "../utils/reviews-util-1";
import { useShared7 } from "../../../shared/hooks/use-shared-7";
export function useReviews6(input) {
  const [items, setItems] = useState([]);
  const { data } = useQuery({ queryKey: ["reviews", 6, input], queryFn: async () => [] });
  const shared = useShared7(input);
  const keyed = useMemo(() => reviewsUtil1(items, "id"), [items]);
  useEffect(() => { if (data) setItems(data); }, [data]);
  return { items, keyed, shared, prefix: REVIEWS_PREFIX_1 };
}
