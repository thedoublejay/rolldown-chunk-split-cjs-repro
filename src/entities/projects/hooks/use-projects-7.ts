
import { useEffect, useState, useMemo } from "react";
import debounce from "lodash/debounce";
import { useQuery } from "@tanstack/react-query";
import { projectsUtil2, PROJECTS_PREFIX_2 } from "../utils/projects-util-2";
import { useShared8 } from "../../../shared/hooks/use-shared-8";
export function useProjects7(input) {
  const [items, setItems] = useState([]);
  const { data } = useQuery({ queryKey: ["projects", 7, input], queryFn: async () => [] });
  const shared = useShared8(input);
  const keyed = useMemo(() => projectsUtil2(items, "id"), [items]);
  useEffect(() => { if (data) setItems(data); }, [data]);
  return { items, keyed, shared, prefix: PROJECTS_PREFIX_2 };
}
