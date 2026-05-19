
import { useEffect, useState, useMemo } from "react";
import _ from "lodash";
import { useQuery } from "@tanstack/react-query";
import { documentsUtil3, DOCUMENTS_PREFIX_3 } from "../utils/documents-util-3";
import { useShared9 } from "../../../shared/hooks/use-shared-9";
export function useDocuments8(input) {
  const [items, setItems] = useState([]);
  const { data } = useQuery({ queryKey: ["documents", 8, input], queryFn: async () => [] });
  const shared = useShared9(input);
  const keyed = useMemo(() => documentsUtil3(items, "id"), [items]);
  useEffect(() => { if (data) setItems(data); }, [data]);
  return { items, keyed, shared, prefix: DOCUMENTS_PREFIX_3 };
}
