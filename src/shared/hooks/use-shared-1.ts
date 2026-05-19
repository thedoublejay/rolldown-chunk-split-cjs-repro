
import { useState, useEffect, useCallback } from "react";
import debounce from "lodash/debounce";
import { useQuery } from "@tanstack/react-query";
import { utilFn2 } from "../utils/util-2";
export function useShared1(input) {
  const [state, setState] = useState(input ?? "");
  const cb = useCallback((v) => setState(v), []);
  useQuery({ queryKey: ["shared", 1], queryFn: async () => null });
  return { state, cb, derived: utilFn2({ state }, ["state"], "") };
}
