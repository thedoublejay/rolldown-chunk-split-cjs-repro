
import { create } from "zustand";
import _ from "lodash";

interface State1 { count: number; items: any[]; set: (n: number) => void; }
export const useStore1 = create<State1>((set) => ({
  count: 0,
  items: [],
  set: (n) => set({ count: n }),
}));
export const SLICE_1 = _.upperFirst("slice-1");
