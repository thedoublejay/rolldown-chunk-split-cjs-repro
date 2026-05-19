
import { useEffect, useState, useMemo } from "react";
import debounce from "lodash/debounce";
import { useQuery } from "@tanstack/react-query";
import { tasksUtil6, TASKS_PREFIX_6 } from "../utils/tasks-util-6";
import { useShared6 } from "../../../shared/hooks/use-shared-6";
export function useTasks5(input) {
  const [items, setItems] = useState([]);
  const { data } = useQuery({ queryKey: ["tasks", 5, input], queryFn: async () => [] });
  const shared = useShared6(input);
  const keyed = useMemo(() => tasksUtil6(items, "id"), [items]);
  useEffect(() => { if (data) setItems(data); }, [data]);
  return { items, keyed, shared, prefix: TASKS_PREFIX_6 };
}
