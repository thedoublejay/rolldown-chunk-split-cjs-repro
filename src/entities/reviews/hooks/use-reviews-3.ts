
import { useEffect, useState, useMemo } from "react";
import debounce from "lodash/debounce";
import { useQuery } from "@tanstack/react-query";
import { reviewsUtil4, REVIEWS_PREFIX_4 } from "../utils/reviews-util-4";
import { useShared4 } from "../../../shared/hooks/use-shared-4";
export function useReviews3(input) {
  const [items, setItems] = useState([]);
  const { data } = useQuery({ queryKey: ["reviews", 3, input], queryFn: async () => [] });
  const shared = useShared4(input);
  const keyed = useMemo(() => reviewsUtil4(items, "id"), [items]);
  useEffect(() => { if (data) setItems(data); }, [data]);
  return { items, keyed, shared, prefix: REVIEWS_PREFIX_4 };
}
