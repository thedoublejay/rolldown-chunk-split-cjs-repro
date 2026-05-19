
import { useState, useEffect, useCallback } from "react";
import debounce from "lodash/debounce";
import { useQuery } from "@tanstack/react-query";
import { utilFn9 } from "../utils/util-9";
export function useShared8(input) {
  const [state, setState] = useState(input ?? "");
  const cb = useCallback((v) => setState(v), []);
  useQuery({ queryKey: ["shared", 8], queryFn: async () => null });
  return { state, cb, derived: utilFn9({ state }, ["state"], "") };
}
