
import { useState, useEffect, useCallback } from "react";
import debounce from "lodash/debounce";
import { useQuery } from "@tanstack/react-query";
import { utilFn5 } from "../utils/util-5";
export function useShared4(input) {
  const [state, setState] = useState(input ?? "");
  const cb = useCallback((v) => setState(v), []);
  useQuery({ queryKey: ["shared", 4], queryFn: async () => null });
  return { state, cb, derived: utilFn5({ state }, ["state"], "") };
}
