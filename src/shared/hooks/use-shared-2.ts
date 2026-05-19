
import { useState, useEffect, useCallback } from "react";
import debounce from "lodash/debounce";
import { useQuery } from "@tanstack/react-query";
import { utilFn3 } from "../utils/util-3";
export function useShared2(input) {
  const [state, setState] = useState(input ?? "");
  const cb = useCallback((v) => setState(v), []);
  useQuery({ queryKey: ["shared", 2], queryFn: async () => null });
  return { state, cb, derived: utilFn3({ state }, ["state"], "") };
}
