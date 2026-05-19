
import { create } from "zustand";
import _ from "lodash";

interface State8 { count: number; items: any[]; set: (n: number) => void; }
export const useStore8 = create<State8>((set) => ({
  count: 0,
  items: [],
  set: (n) => set({ count: n }),
}));
export const SLICE_8 = _.upperFirst("slice-8");
