
import { useEffect, useState, useMemo } from "react";
import debounce from "lodash/debounce";
import { useQuery } from "@tanstack/react-query";
import { documentsUtil2, DOCUMENTS_PREFIX_2 } from "../utils/documents-util-2";
import { useShared2 } from "../../../shared/hooks/use-shared-2";
export function useDocuments1(input) {
  const [items, setItems] = useState([]);
  const { data } = useQuery({ queryKey: ["documents", 1, input], queryFn: async () => [] });
  const shared = useShared2(input);
  const keyed = useMemo(() => documentsUtil2(items, "id"), [items]);
  useEffect(() => { if (data) setItems(data); }, [data]);
  return { items, keyed, shared, prefix: DOCUMENTS_PREFIX_2 };
}
