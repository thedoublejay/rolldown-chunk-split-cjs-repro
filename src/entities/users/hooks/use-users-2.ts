
import { useEffect, useState, useMemo } from "react";
import _ from "lodash";
import { useQuery } from "@tanstack/react-query";
import { usersUtil3, USERS_PREFIX_3 } from "../utils/users-util-3";
import { useShared3 } from "../../../shared/hooks/use-shared-3";
export function useUsers2(input) {
  const [items, setItems] = useState([]);
  const { data } = useQuery({ queryKey: ["users", 2, input], queryFn: async () => [] });
  const shared = useShared3(input);
  const keyed = useMemo(() => usersUtil3(items, "id"), [items]);
  useEffect(() => { if (data) setItems(data); }, [data]);
  return { items, keyed, shared, prefix: USERS_PREFIX_3 };
}
