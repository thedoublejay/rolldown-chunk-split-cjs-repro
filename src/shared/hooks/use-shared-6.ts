
import { useState, useEffect, useCallback } from "react";
import _ from "lodash";
import { useQuery } from "@tanstack/react-query";
import { utilFn7 } from "../utils/util-7";
export function useShared6(input) {
  const [state, setState] = useState(input ?? "");
  const cb = useCallback((v) => setState(v), []);
  useQuery({ queryKey: ["shared", 6], queryFn: async () => null });
  return { state, cb, derived: utilFn7({ state }, ["state"], "") };
}
