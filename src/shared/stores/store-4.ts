
import { create } from "zustand";
import _ from "lodash";

interface State4 { count: number; items: any[]; set: (n: number) => void; }
export const useStore4 = create<State4>((set) => ({
  count: 0,
  items: [],
  set: (n) => set({ count: n }),
}));
export const SLICE_4 = _.upperFirst("slice-4");
