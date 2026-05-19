
import { useState, useEffect, useCallback } from "react";
import _ from "lodash";
import { useQuery } from "@tanstack/react-query";
import { utilFn16 } from "../utils/util-16";
export function useShared15(input) {
  const [state, setState] = useState(input ?? "");
  const cb = useCallback((v) => setState(v), []);
  useQuery({ queryKey: ["shared", 15], queryFn: async () => null });
  return { state, cb, derived: utilFn16({ state }, ["state"], "") };
}
