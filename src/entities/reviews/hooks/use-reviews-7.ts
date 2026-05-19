
import { useEffect, useState, useMemo } from "react";
import debounce from "lodash/debounce";
import { useQuery } from "@tanstack/react-query";
import { reviewsUtil2, REVIEWS_PREFIX_2 } from "../utils/reviews-util-2";
import { useShared8 } from "../../../shared/hooks/use-shared-8";
export function useReviews7(input) {
  const [items, setItems] = useState([]);
  const { data } = useQuery({ queryKey: ["reviews", 7, input], queryFn: async () => [] });
  const shared = useShared8(input);
  const keyed = useMemo(() => reviewsUtil2(items, "id"), [items]);
  useEffect(() => { if (data) setItems(data); }, [data]);
  return { items, keyed, shared, prefix: REVIEWS_PREFIX_2 };
}
