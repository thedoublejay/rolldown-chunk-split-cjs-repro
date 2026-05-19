
import { useEffect, useState, useMemo } from "react";
import _ from "lodash";
import { useQuery } from "@tanstack/react-query";
import { documentsUtil3, DOCUMENTS_PREFIX_3 } from "../utils/documents-util-3";
import { useShared3 } from "../../../shared/hooks/use-shared-3";
export function useDocuments2(input) {
  const [items, setItems] = useState([]);
  const { data } = useQuery({ queryKey: ["documents", 2, input], queryFn: async () => [] });
  const shared = useShared3(input);
  const keyed = useMemo(() => documentsUtil3(items, "id"), [items]);
  useEffect(() => { if (data) setItems(data); }, [data]);
  return { items, keyed, shared, prefix: DOCUMENTS_PREFIX_3 };
}
