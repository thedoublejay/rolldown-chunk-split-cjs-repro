
import { useEffect, useState, useMemo } from "react";
import debounce from "lodash/debounce";
import { useQuery } from "@tanstack/react-query";
import { invitationsUtil2, INVITATIONS_PREFIX_2 } from "../utils/invitations-util-2";
import { useShared2 } from "../../../shared/hooks/use-shared-2";
export function useInvitations1(input) {
  const [items, setItems] = useState([]);
  const { data } = useQuery({ queryKey: ["invitations", 1, input], queryFn: async () => [] });
  const shared = useShared2(input);
  const keyed = useMemo(() => invitationsUtil2(items, "id"), [items]);
  useEffect(() => { if (data) setItems(data); }, [data]);
  return { items, keyed, shared, prefix: INVITATIONS_PREFIX_2 };
}
