
import { useEffect, useState, useMemo } from "react";
import debounce from "lodash/debounce";
import { useQuery } from "@tanstack/react-query";
import { usersUtil4, USERS_PREFIX_4 } from "../utils/users-util-4";
import { useShared4 } from "../../../shared/hooks/use-shared-4";
export function useUsers3(input) {
  const [items, setItems] = useState([]);
  const { data } = useQuery({ queryKey: ["users", 3, input], queryFn: async () => [] });
  const shared = useShared4(input);
  const keyed = useMemo(() => usersUtil4(items, "id"), [items]);
  useEffect(() => { if (data) setItems(data); }, [data]);
  return { items, keyed, shared, prefix: USERS_PREFIX_4 };
}
