
import { useEffect, useState, useMemo } from "react";
import debounce from "lodash/debounce";
import { useQuery } from "@tanstack/react-query";
import { reviewsUtil6, REVIEWS_PREFIX_6 } from "../utils/reviews-util-6";
import { useShared6 } from "../../../shared/hooks/use-shared-6";
export function useReviews5(input) {
  const [items, setItems] = useState([]);
  const { data } = useQuery({ queryKey: ["reviews", 5, input], queryFn: async () => [] });
  const shared = useShared6(input);
  const keyed = useMemo(() => reviewsUtil6(items, "id"), [items]);
  useEffect(() => { if (data) setItems(data); }, [data]);
  return { items, keyed, shared, prefix: REVIEWS_PREFIX_6 };
}
