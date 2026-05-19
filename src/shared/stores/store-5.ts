
import { create } from "zustand";
import _ from "lodash";

interface State5 { count: number; items: any[]; set: (n: number) => void; }
export const useStore5 = create<State5>((set) => ({
  count: 0,
  items: [],
  set: (n) => set({ count: n }),
}));
export const SLICE_5 = _.upperFirst("slice-5");
