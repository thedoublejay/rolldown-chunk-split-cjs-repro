
import { useEffect, useState, useMemo } from "react";
import _ from "lodash";
import { useQuery } from "@tanstack/react-query";
import { usersUtil1, USERS_PREFIX_1 } from "../utils/users-util-1";
import { useShared7 } from "../../../shared/hooks/use-shared-7";
export function useUsers6(input) {
  const [items, setItems] = useState([]);
  const { data } = useQuery({ queryKey: ["users", 6, input], queryFn: async () => [] });
  const shared = useShared7(input);
  const keyed = useMemo(() => usersUtil1(items, "id"), [items]);
  useEffect(() => { if (data) setItems(data); }, [data]);
  return { items, keyed, shared, prefix: USERS_PREFIX_1 };
}
