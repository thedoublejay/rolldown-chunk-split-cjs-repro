
import { create } from "zustand";
import _ from "lodash";

interface State7 { count: number; items: any[]; set: (n: number) => void; }
export const useStore7 = create<State7>((set) => ({
  count: 0,
  items: [],
  set: (n) => set({ count: n }),
}));
export const SLICE_7 = _.upperFirst("slice-7");
