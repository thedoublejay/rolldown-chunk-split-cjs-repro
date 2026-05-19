
import { useState, useEffect, useCallback } from "react";
import _ from "lodash";
import { useQuery } from "@tanstack/react-query";
import { utilFn4 } from "../utils/util-4";
export function useShared3(input) {
  const [state, setState] = useState(input ?? "");
  const cb = useCallback((v) => setState(v), []);
  useQuery({ queryKey: ["shared", 3], queryFn: async () => null });
  return { state, cb, derived: utilFn4({ state }, ["state"], "") };
}
