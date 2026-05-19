
import { useEffect, useState, useMemo } from "react";
import debounce from "lodash/debounce";
import { useQuery } from "@tanstack/react-query";
import { usersUtil2, USERS_PREFIX_2 } from "../utils/users-util-2";
import { useShared2 } from "../../../shared/hooks/use-shared-2";
export function useUsers1(input) {
  const [items, setItems] = useState([]);
  const { data } = useQuery({ queryKey: ["users", 1, input], queryFn: async () => [] });
  const shared = useShared2(input);
  const keyed = useMemo(() => usersUtil2(items, "id"), [items]);
  useEffect(() => { if (data) setItems(data); }, [data]);
  return { items, keyed, shared, prefix: USERS_PREFIX_2 };
}
