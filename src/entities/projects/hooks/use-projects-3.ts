
import { useEffect, useState, useMemo } from "react";
import debounce from "lodash/debounce";
import { useQuery } from "@tanstack/react-query";
import { projectsUtil4, PROJECTS_PREFIX_4 } from "../utils/projects-util-4";
import { useShared4 } from "../../../shared/hooks/use-shared-4";
export function useProjects3(input) {
  const [items, setItems] = useState([]);
  const { data } = useQuery({ queryKey: ["projects", 3, input], queryFn: async () => [] });
  const shared = useShared4(input);
  const keyed = useMemo(() => projectsUtil4(items, "id"), [items]);
  useEffect(() => { if (data) setItems(data); }, [data]);
  return { items, keyed, shared, prefix: PROJECTS_PREFIX_4 };
}
