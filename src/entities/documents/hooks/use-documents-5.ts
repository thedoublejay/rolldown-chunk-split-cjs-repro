
import { useEffect, useState, useMemo } from "react";
import debounce from "lodash/debounce";
import { useQuery } from "@tanstack/react-query";
import { documentsUtil6, DOCUMENTS_PREFIX_6 } from "../utils/documents-util-6";
import { useShared6 } from "../../../shared/hooks/use-shared-6";
export function useDocuments5(input) {
  const [items, setItems] = useState([]);
  const { data } = useQuery({ queryKey: ["documents", 5, input], queryFn: async () => [] });
  const shared = useShared6(input);
  const keyed = useMemo(() => documentsUtil6(items, "id"), [items]);
  useEffect(() => { if (data) setItems(data); }, [data]);
  return { items, keyed, shared, prefix: DOCUMENTS_PREFIX_6 };
}
