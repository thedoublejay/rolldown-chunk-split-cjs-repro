
import { useEffect, useState, useMemo } from "react";
import debounce from "lodash/debounce";
import { useQuery } from "@tanstack/react-query";
import { projectsUtil6, PROJECTS_PREFIX_6 } from "../utils/projects-util-6";
import { useShared6 } from "../../../shared/hooks/use-shared-6";
export function useProjects5(input) {
  const [items, setItems] = useState([]);
  const { data } = useQuery({ queryKey: ["projects", 5, input], queryFn: async () => [] });
  const shared = useShared6(input);
  const keyed = useMemo(() => projectsUtil6(items, "id"), [items]);
  useEffect(() => { if (data) setItems(data); }, [data]);
  return { items, keyed, shared, prefix: PROJECTS_PREFIX_6 };
}
