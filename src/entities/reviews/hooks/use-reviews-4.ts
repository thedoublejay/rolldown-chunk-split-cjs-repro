
import { useEffect, useState, useMemo } from "react";
import _ from "lodash";
import { useQuery } from "@tanstack/react-query";
import { reviewsUtil5, REVIEWS_PREFIX_5 } from "../utils/reviews-util-5";
import { useShared5 } from "../../../shared/hooks/use-shared-5";
export function useReviews4(input) {
  const [items, setItems] = useState([]);
  const { data } = useQuery({ queryKey: ["reviews", 4, input], queryFn: async () => [] });
  const shared = useShared5(input);
  const keyed = useMemo(() => reviewsUtil5(items, "id"), [items]);
  useEffect(() => { if (data) setItems(data); }, [data]);
  return { items, keyed, shared, prefix: REVIEWS_PREFIX_5 };
}
