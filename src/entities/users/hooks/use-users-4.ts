
import { useEffect, useState, useMemo } from "react";
import _ from "lodash";
import { useQuery } from "@tanstack/react-query";
import { usersUtil5, USERS_PREFIX_5 } from "../utils/users-util-5";
import { useShared5 } from "../../../shared/hooks/use-shared-5";
export function useUsers4(input) {
  const [items, setItems] = useState([]);
  const { data } = useQuery({ queryKey: ["users", 4, input], queryFn: async () => [] });
  const shared = useShared5(input);
  const keyed = useMemo(() => usersUtil5(items, "id"), [items]);
  useEffect(() => { if (data) setItems(data); }, [data]);
  return { items, keyed, shared, prefix: USERS_PREFIX_5 };
}
