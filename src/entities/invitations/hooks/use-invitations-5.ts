
import { useEffect, useState, useMemo } from "react";
import debounce from "lodash/debounce";
import { useQuery } from "@tanstack/react-query";
import { invitationsUtil6, INVITATIONS_PREFIX_6 } from "../utils/invitations-util-6";
import { useShared6 } from "../../../shared/hooks/use-shared-6";
export function useInvitations5(input) {
  const [items, setItems] = useState([]);
  const { data } = useQuery({ queryKey: ["invitations", 5, input], queryFn: async () => [] });
  const shared = useShared6(input);
  const keyed = useMemo(() => invitationsUtil6(items, "id"), [items]);
  useEffect(() => { if (data) setItems(data); }, [data]);
  return { items, keyed, shared, prefix: INVITATIONS_PREFIX_6 };
}
