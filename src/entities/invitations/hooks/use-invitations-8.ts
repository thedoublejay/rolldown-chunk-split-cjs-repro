
import { useEffect, useState, useMemo } from "react";
import _ from "lodash";
import { useQuery } from "@tanstack/react-query";
import { invitationsUtil3, INVITATIONS_PREFIX_3 } from "../utils/invitations-util-3";
import { useShared9 } from "../../../shared/hooks/use-shared-9";
export function useInvitations8(input) {
  const [items, setItems] = useState([]);
  const { data } = useQuery({ queryKey: ["invitations", 8, input], queryFn: async () => [] });
  const shared = useShared9(input);
  const keyed = useMemo(() => invitationsUtil3(items, "id"), [items]);
  useEffect(() => { if (data) setItems(data); }, [data]);
  return { items, keyed, shared, prefix: INVITATIONS_PREFIX_3 };
}
