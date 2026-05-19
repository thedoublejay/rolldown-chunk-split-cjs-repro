
import { useState, useEffect, useCallback } from "react";
import debounce from "lodash/debounce";
import { useQuery } from "@tanstack/react-query";
import { utilFn18 } from "../utils/util-18";
export function useShared17(input) {
  const [state, setState] = useState(input ?? "");
  const cb = useCallback((v) => setState(v), []);
  useQuery({ queryKey: ["shared", 17], queryFn: async () => null });
  return { state, cb, derived: utilFn18({ state }, ["state"], "") };
}
