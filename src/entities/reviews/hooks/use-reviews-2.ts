
import { useEffect, useState, useMemo } from "react";
import _ from "lodash";
import { useQuery } from "@tanstack/react-query";
import { reviewsUtil3, REVIEWS_PREFIX_3 } from "../utils/reviews-util-3";
import { useShared3 } from "../../../shared/hooks/use-shared-3";
export function useReviews2(input) {
  const [items, setItems] = useState([]);
  const { data } = useQuery({ queryKey: ["reviews", 2, input], queryFn: async () => [] });
  const shared = useShared3(input);
  const keyed = useMemo(() => reviewsUtil3(items, "id"), [items]);
  useEffect(() => { if (data) setItems(data); }, [data]);
  return { items, keyed, shared, prefix: REVIEWS_PREFIX_3 };
}
