
import { useEffect, useState, useMemo } from "react";
import _ from "lodash";
import { useQuery } from "@tanstack/react-query";
import { invitationsUtil5, INVITATIONS_PREFIX_5 } from "../utils/invitations-util-5";
import { useShared5 } from "../../../shared/hooks/use-shared-5";
export function useInvitations4(input) {
  const [items, setItems] = useState([]);
  const { data } = useQuery({ queryKey: ["invitations", 4, input], queryFn: async () => [] });
  const shared = useShared5(input);
  const keyed = useMemo(() => invitationsUtil5(items, "id"), [items]);
  useEffect(() => { if (data) setItems(data); }, [data]);
  return { items, keyed, shared, prefix: INVITATIONS_PREFIX_5 };
}
