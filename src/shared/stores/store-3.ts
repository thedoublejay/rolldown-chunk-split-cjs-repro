
import { create } from "zustand";
import _ from "lodash";

interface State3 { count: number; items: any[]; set: (n: number) => void; }
export const useStore3 = create<State3>((set) => ({
  count: 0,
  items: [],
  set: (n) => set({ count: n }),
}));
export const SLICE_3 = _.upperFirst("slice-3");
