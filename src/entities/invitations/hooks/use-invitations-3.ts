
import { useEffect, useState, useMemo } from "react";
import debounce from "lodash/debounce";
import { useQuery } from "@tanstack/react-query";
import { invitationsUtil4, INVITATIONS_PREFIX_4 } from "../utils/invitations-util-4";
import { useShared4 } from "../../../shared/hooks/use-shared-4";
export function useInvitations3(input) {
  const [items, setItems] = useState([]);
  const { data } = useQuery({ queryKey: ["invitations", 3, input], queryFn: async () => [] });
  const shared = useShared4(input);
  const keyed = useMemo(() => invitationsUtil4(items, "id"), [items]);
  useEffect(() => { if (data) setItems(data); }, [data]);
  return { items, keyed, shared, prefix: INVITATIONS_PREFIX_4 };
}
