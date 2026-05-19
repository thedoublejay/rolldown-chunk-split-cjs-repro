
import { useEffect, useState, useMemo } from "react";
import debounce from "lodash/debounce";
import { useQuery } from "@tanstack/react-query";
import { documentsUtil4, DOCUMENTS_PREFIX_4 } from "../utils/documents-util-4";
import { useShared4 } from "../../../shared/hooks/use-shared-4";
export function useDocuments3(input) {
  const [items, setItems] = useState([]);
  const { data } = useQuery({ queryKey: ["documents", 3, input], queryFn: async () => [] });
  const shared = useShared4(input);
  const keyed = useMemo(() => documentsUtil4(items, "id"), [items]);
  useEffect(() => { if (data) setItems(data); }, [data]);
  return { items, keyed, shared, prefix: DOCUMENTS_PREFIX_4 };
}
