
import { useEffect, useState, useMemo } from "react";
import _ from "lodash";
import { useQuery } from "@tanstack/react-query";
import { projectsUtil3, PROJECTS_PREFIX_3 } from "../utils/projects-util-3";
import { useShared3 } from "../../../shared/hooks/use-shared-3";
export function useProjects2(input) {
  const [items, setItems] = useState([]);
  const { data } = useQuery({ queryKey: ["projects", 2, input], queryFn: async () => [] });
  const shared = useShared3(input);
  const keyed = useMemo(() => projectsUtil3(items, "id"), [items]);
  useEffect(() => { if (data) setItems(data); }, [data]);
  return { items, keyed, shared, prefix: PROJECTS_PREFIX_3 };
}
