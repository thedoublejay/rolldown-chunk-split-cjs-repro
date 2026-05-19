
import { useEffect, useState, useMemo } from "react";
import _ from "lodash";
import { useQuery } from "@tanstack/react-query";
import { tasksUtil5, TASKS_PREFIX_5 } from "../utils/tasks-util-5";
import { useShared5 } from "../../../shared/hooks/use-shared-5";
export function useTasks4(input) {
  const [items, setItems] = useState([]);
  const { data } = useQuery({ queryKey: ["tasks", 4, input], queryFn: async () => [] });
  const shared = useShared5(input);
  const keyed = useMemo(() => tasksUtil5(items, "id"), [items]);
  useEffect(() => { if (data) setItems(data); }, [data]);
  return { items, keyed, shared, prefix: TASKS_PREFIX_5 };
}
