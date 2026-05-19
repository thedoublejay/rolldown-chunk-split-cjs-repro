
import { useEffect, useState, useMemo } from "react";
import debounce from "lodash/debounce";
import { useQuery } from "@tanstack/react-query";
import { tasksUtil2, TASKS_PREFIX_2 } from "../utils/tasks-util-2";
import { useShared8 } from "../../../shared/hooks/use-shared-8";
export function useTasks7(input) {
  const [items, setItems] = useState([]);
  const { data } = useQuery({ queryKey: ["tasks", 7, input], queryFn: async () => [] });
  const shared = useShared8(input);
  const keyed = useMemo(() => tasksUtil2(items, "id"), [items]);
  useEffect(() => { if (data) setItems(data); }, [data]);
  return { items, keyed, shared, prefix: TASKS_PREFIX_2 };
}
