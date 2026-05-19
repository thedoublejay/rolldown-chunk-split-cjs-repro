
import { useEffect, useState, useMemo } from "react";
import _ from "lodash";
import { useQuery } from "@tanstack/react-query";
import { projectsUtil5, PROJECTS_PREFIX_5 } from "../utils/projects-util-5";
import { useShared5 } from "../../../shared/hooks/use-shared-5";
export function useProjects4(input) {
  const [items, setItems] = useState([]);
  const { data } = useQuery({ queryKey: ["projects", 4, input], queryFn: async () => [] });
  const shared = useShared5(input);
  const keyed = useMemo(() => projectsUtil5(items, "id"), [items]);
  useEffect(() => { if (data) setItems(data); }, [data]);
  return { items, keyed, shared, prefix: PROJECTS_PREFIX_5 };
}
