
import { create } from "zustand";
import _ from "lodash";

interface State2 { count: number; items: any[]; set: (n: number) => void; }
export const useStore2 = create<State2>((set) => ({
  count: 0,
  items: [],
  set: (n) => set({ count: n }),
}));
export const SLICE_2 = _.upperFirst("slice-2");
