
import { useEffect, useState, useMemo } from "react";
import _ from "lodash";
import { useQuery } from "@tanstack/react-query";
import { documentsUtil1, DOCUMENTS_PREFIX_1 } from "../utils/documents-util-1";
import { useShared7 } from "../../../shared/hooks/use-shared-7";
export function useDocuments6(input) {
  const [items, setItems] = useState([]);
  const { data } = useQuery({ queryKey: ["documents", 6, input], queryFn: async () => [] });
  const shared = useShared7(input);
  const keyed = useMemo(() => documentsUtil1(items, "id"), [items]);
  useEffect(() => { if (data) setItems(data); }, [data]);
  return { items, keyed, shared, prefix: DOCUMENTS_PREFIX_1 };
}
