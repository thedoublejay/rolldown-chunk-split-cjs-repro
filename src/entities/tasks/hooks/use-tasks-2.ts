
import { useEffect, useState, useMemo } from "react";
import _ from "lodash";
import { useQuery } from "@tanstack/react-query";
import { tasksUtil3, TASKS_PREFIX_3 } from "../utils/tasks-util-3";
import { useShared3 } from "../../../shared/hooks/use-shared-3";
export function useTasks2(input) {
  const [items, setItems] = useState([]);
  const { data } = useQuery({ queryKey: ["tasks", 2, input], queryFn: async () => [] });
  const shared = useShared3(input);
  const keyed = useMemo(() => tasksUtil3(items, "id"), [items]);
  useEffect(() => { if (data) setItems(data); }, [data]);
  return { items, keyed, shared, prefix: TASKS_PREFIX_3 };
}
