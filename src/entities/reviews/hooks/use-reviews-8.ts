
import { useEffect, useState, useMemo } from "react";
import _ from "lodash";
import { useQuery } from "@tanstack/react-query";
import { reviewsUtil3, REVIEWS_PREFIX_3 } from "../utils/reviews-util-3";
import { useShared9 } from "../../../shared/hooks/use-shared-9";
export function useReviews8(input) {
  const [items, setItems] = useState([]);
  const { data } = useQuery({ queryKey: ["reviews", 8, input], queryFn: async () => [] });
  const shared = useShared9(input);
  const keyed = useMemo(() => reviewsUtil3(items, "id"), [items]);
  useEffect(() => { if (data) setItems(data); }, [data]);
  return { items, keyed, shared, prefix: REVIEWS_PREFIX_3 };
}
