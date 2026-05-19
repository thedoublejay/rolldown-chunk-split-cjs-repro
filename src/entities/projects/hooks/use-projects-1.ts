
import { useEffect, useState, useMemo } from "react";
import debounce from "lodash/debounce";
import { useQuery } from "@tanstack/react-query";
import { projectsUtil2, PROJECTS_PREFIX_2 } from "../utils/projects-util-2";
import { useShared2 } from "../../../shared/hooks/use-shared-2";
export function useProjects1(input) {
  const [items, setItems] = useState([]);
  const { data } = useQuery({ queryKey: ["projects", 1, input], queryFn: async () => [] });
  const shared = useShared2(input);
  const keyed = useMemo(() => projectsUtil2(items, "id"), [items]);
  useEffect(() => { if (data) setItems(data); }, [data]);
  return { items, keyed, shared, prefix: PROJECTS_PREFIX_2 };
}
