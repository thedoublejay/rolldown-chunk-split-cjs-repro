
import { useState, useEffect, useCallback } from "react";
import debounce from "lodash/debounce";
import { useQuery } from "@tanstack/react-query";
import { utilFn14 } from "../utils/util-14";
export function useShared13(input) {
  const [state, setState] = useState(input ?? "");
  const cb = useCallback((v) => setState(v), []);
  useQuery({ queryKey: ["shared", 13], queryFn: async () => null });
  return { state, cb, derived: utilFn14({ state }, ["state"], "") };
}
