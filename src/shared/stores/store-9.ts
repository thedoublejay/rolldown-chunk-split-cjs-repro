
import { create } from "zustand";
import _ from "lodash";

interface State9 { count: number; items: any[]; set: (n: number) => void; }
export const useStore9 = create<State9>((set) => ({
  count: 0,
  items: [],
  set: (n) => set({ count: n }),
}));
export const SLICE_9 = _.upperFirst("slice-9");
