
import { create } from "zustand";
import _ from "lodash";

interface State6 { count: number; items: any[]; set: (n: number) => void; }
export const useStore6 = create<State6>((set) => ({
  count: 0,
  items: [],
  set: (n) => set({ count: n }),
}));
export const SLICE_6 = _.upperFirst("slice-6");
