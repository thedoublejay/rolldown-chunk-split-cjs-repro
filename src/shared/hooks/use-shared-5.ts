
import { useState, useEffect, useCallback } from "react";
import debounce from "lodash/debounce";
import { useQuery } from "@tanstack/react-query";
import { utilFn6 } from "../utils/util-6";
export function useShared5(input) {
  const [state, setState] = useState(input ?? "");
  const cb = useCallback((v) => setState(v), []);
  useQuery({ queryKey: ["shared", 5], queryFn: async () => null });
  return { state, cb, derived: utilFn6({ state }, ["state"], "") };
}
