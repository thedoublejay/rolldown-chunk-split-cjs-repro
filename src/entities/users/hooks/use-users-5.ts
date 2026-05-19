
import { useEffect, useState, useMemo } from "react";
import debounce from "lodash/debounce";
import { useQuery } from "@tanstack/react-query";
import { usersUtil6, USERS_PREFIX_6 } from "../utils/users-util-6";
import { useShared6 } from "../../../shared/hooks/use-shared-6";
export function useUsers5(input) {
  const [items, setItems] = useState([]);
  const { data } = useQuery({ queryKey: ["users", 5, input], queryFn: async () => [] });
  const shared = useShared6(input);
  const keyed = useMemo(() => usersUtil6(items, "id"), [items]);
  useEffect(() => { if (data) setItems(data); }, [data]);
  return { items, keyed, shared, prefix: USERS_PREFIX_6 };
}
