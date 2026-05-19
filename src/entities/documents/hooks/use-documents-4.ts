
import { useEffect, useState, useMemo } from "react";
import _ from "lodash";
import { useQuery } from "@tanstack/react-query";
import { documentsUtil5, DOCUMENTS_PREFIX_5 } from "../utils/documents-util-5";
import { useShared5 } from "../../../shared/hooks/use-shared-5";
export function useDocuments4(input) {
  const [items, setItems] = useState([]);
  const { data } = useQuery({ queryKey: ["documents", 4, input], queryFn: async () => [] });
  const shared = useShared5(input);
  const keyed = useMemo(() => documentsUtil5(items, "id"), [items]);
  useEffect(() => { if (data) setItems(data); }, [data]);
  return { items, keyed, shared, prefix: DOCUMENTS_PREFIX_5 };
}
