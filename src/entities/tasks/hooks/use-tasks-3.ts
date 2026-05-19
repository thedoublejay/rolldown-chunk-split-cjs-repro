
import { useEffect, useState, useMemo } from "react";
import debounce from "lodash/debounce";
import { useQuery } from "@tanstack/react-query";
import { tasksUtil4, TASKS_PREFIX_4 } from "../utils/tasks-util-4";
import { useShared4 } from "../../../shared/hooks/use-shared-4";
export function useTasks3(input) {
  const [items, setItems] = useState([]);
  const { data } = useQuery({ queryKey: ["tasks", 3, input], queryFn: async () => [] });
  const shared = useShared4(input);
  const keyed = useMemo(() => tasksUtil4(items, "id"), [items]);
  useEffect(() => { if (data) setItems(data); }, [data]);
  return { items, keyed, shared, prefix: TASKS_PREFIX_4 };
}
