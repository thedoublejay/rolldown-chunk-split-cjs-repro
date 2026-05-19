
import { useEffect, useState, useMemo } from "react";
import _ from "lodash";
import { useQuery } from "@tanstack/react-query";
import { projectsUtil1, PROJECTS_PREFIX_1 } from "../utils/projects-util-1";
import { useShared7 } from "../../../shared/hooks/use-shared-7";
export function useProjects6(input) {
  const [items, setItems] = useState([]);
  const { data } = useQuery({ queryKey: ["projects", 6, input], queryFn: async () => [] });
  const shared = useShared7(input);
  const keyed = useMemo(() => projectsUtil1(items, "id"), [items]);
  useEffect(() => { if (data) setItems(data); }, [data]);
  return { items, keyed, shared, prefix: PROJECTS_PREFIX_1 };
}
