
import { useState, useEffect, useCallback } from "react";
import debounce from "lodash/debounce";
import { useQuery } from "@tanstack/react-query";
import { utilFn1 } from "../utils/util-1";
export function useShared20(input) {
  const [state, setState] = useState(input ?? "");
  const cb = useCallback((v) => setState(v), []);
  useQuery({ queryKey: ["shared", 20], queryFn: async () => null });
  return { state, cb, derived: utilFn1({ state }, ["state"], "") };
}
