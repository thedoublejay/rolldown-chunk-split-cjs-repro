
import { create } from "zustand";
import _ from "lodash";

interface State10 { count: number; items: any[]; set: (n: number) => void; }
export const useStore10 = create<State10>((set) => ({
  count: 0,
  items: [],
  set: (n) => set({ count: n }),
}));
export const SLICE_10 = _.upperFirst("slice-10");
