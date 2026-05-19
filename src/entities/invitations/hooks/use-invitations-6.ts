
import { useEffect, useState, useMemo } from "react";
import _ from "lodash";
import { useQuery } from "@tanstack/react-query";
import { invitationsUtil1, INVITATIONS_PREFIX_1 } from "../utils/invitations-util-1";
import { useShared7 } from "../../../shared/hooks/use-shared-7";
export function useInvitations6(input) {
  const [items, setItems] = useState([]);
  const { data } = useQuery({ queryKey: ["invitations", 6, input], queryFn: async () => [] });
  const shared = useShared7(input);
  const keyed = useMemo(() => invitationsUtil1(items, "id"), [items]);
  useEffect(() => { if (data) setItems(data); }, [data]);
  return { items, keyed, shared, prefix: INVITATIONS_PREFIX_1 };
}
