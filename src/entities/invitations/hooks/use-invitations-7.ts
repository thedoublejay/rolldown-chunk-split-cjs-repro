
import { useEffect, useState, useMemo } from "react";
import debounce from "lodash/debounce";
import { useQuery } from "@tanstack/react-query";
import { invitationsUtil2, INVITATIONS_PREFIX_2 } from "../utils/invitations-util-2";
import { useShared8 } from "../../../shared/hooks/use-shared-8";
export function useInvitations7(input) {
  const [items, setItems] = useState([]);
  const { data } = useQuery({ queryKey: ["invitations", 7, input], queryFn: async () => [] });
  const shared = useShared8(input);
  const keyed = useMemo(() => invitationsUtil2(items, "id"), [items]);
  useEffect(() => { if (data) setItems(data); }, [data]);
  return { items, keyed, shared, prefix: INVITATIONS_PREFIX_2 };
}
