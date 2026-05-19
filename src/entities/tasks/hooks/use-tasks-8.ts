
import { useEffect, useState, useMemo } from "react";
import _ from "lodash";
import { useQuery } from "@tanstack/react-query";
import { tasksUtil3, TASKS_PREFIX_3 } from "../utils/tasks-util-3";
import { useShared9 } from "../../../shared/hooks/use-shared-9";
export function useTasks8(input) {
  const [items, setItems] = useState([]);
  const { data } = useQuery({ queryKey: ["tasks", 8, input], queryFn: async () => [] });
  const shared = useShared9(input);
  const keyed = useMemo(() => tasksUtil3(items, "id"), [items]);
  useEffect(() => { if (data) setItems(data); }, [data]);
  return { items, keyed, shared, prefix: TASKS_PREFIX_3 };
}
