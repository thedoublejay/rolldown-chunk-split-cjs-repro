
import { useState, useEffect, useCallback } from "react";
import debounce from "lodash/debounce";
import { useQuery } from "@tanstack/react-query";
import { utilFn8 } from "../utils/util-8";
export function useShared7(input) {
  const [state, setState] = useState(input ?? "");
  const cb = useCallback((v) => setState(v), []);
  useQuery({ queryKey: ["shared", 7], queryFn: async () => null });
  return { state, cb, derived: utilFn8({ state }, ["state"], "") };
}
