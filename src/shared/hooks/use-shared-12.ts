
import { useState, useEffect, useCallback } from "react";
import _ from "lodash";
import { useQuery } from "@tanstack/react-query";
import { utilFn13 } from "../utils/util-13";
export function useShared12(input) {
  const [state, setState] = useState(input ?? "");
  const cb = useCallback((v) => setState(v), []);
  useQuery({ queryKey: ["shared", 12], queryFn: async () => null });
  return { state, cb, derived: utilFn13({ state }, ["state"], "") };
}
