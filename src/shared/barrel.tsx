
import { utilFn1, PREFIX_1 } from "./utils/util-1";
import { utilFn2, PREFIX_2 } from "./utils/util-2";
import { utilFn3, PREFIX_3 } from "./utils/util-3";
import { utilFn4, PREFIX_4 } from "./utils/util-4";
import { utilFn5, PREFIX_5 } from "./utils/util-5";
import { utilFn6, PREFIX_6 } from "./utils/util-6";
import { utilFn7, PREFIX_7 } from "./utils/util-7";
import { utilFn8, PREFIX_8 } from "./utils/util-8";
import { utilFn9, PREFIX_9 } from "./utils/util-9";
import { utilFn10, PREFIX_10 } from "./utils/util-10";
import { utilFn11, PREFIX_11 } from "./utils/util-11";
import { utilFn12, PREFIX_12 } from "./utils/util-12";
import { utilFn13, PREFIX_13 } from "./utils/util-13";
import { utilFn14, PREFIX_14 } from "./utils/util-14";
import { utilFn15, PREFIX_15 } from "./utils/util-15";
import { utilFn16, PREFIX_16 } from "./utils/util-16";
import { utilFn17, PREFIX_17 } from "./utils/util-17";
import { utilFn18, PREFIX_18 } from "./utils/util-18";
import { utilFn19, PREFIX_19 } from "./utils/util-19";
import { utilFn20, PREFIX_20 } from "./utils/util-20";
import LegacyButton from "../legacy/components/LegacyButton";
import LegacyContainer1 from "../legacy/containers/LegacyContainer1";
import LegacyContainer2 from "../legacy/containers/LegacyContainer2";
import LegacyContainer3 from "../legacy/containers/LegacyContainer3";
import LegacyContainer4 from "../legacy/containers/LegacyContainer4";
import LegacyContainer5 from "../legacy/containers/LegacyContainer5";
import LegacyContainer6 from "../legacy/containers/LegacyContainer6";
import LegacyContainer7 from "../legacy/containers/LegacyContainer7";
import LegacyContainer8 from "../legacy/containers/LegacyContainer8";
import LegacyContainer9 from "../legacy/containers/LegacyContainer9";
import LegacyContainer10 from "../legacy/containers/LegacyContainer10";
import LegacyContainer11 from "../legacy/containers/LegacyContainer11";
import LegacyContainer12 from "../legacy/containers/LegacyContainer12";
import LegacyContainer13 from "../legacy/containers/LegacyContainer13";
import LegacyContainer14 from "../legacy/containers/LegacyContainer14";
import LegacyContainer15 from "../legacy/containers/LegacyContainer15";
import LegacyContainer16 from "../legacy/containers/LegacyContainer16";

export const ALL_UTILS = [utilFn1, utilFn2, utilFn3, utilFn4, utilFn5, utilFn6, utilFn7, utilFn8, utilFn9, utilFn10, utilFn11, utilFn12, utilFn13, utilFn14, utilFn15, utilFn16, utilFn17, utilFn18, utilFn19, utilFn20];
export const ALL_PREFIXES = [PREFIX_1, PREFIX_2, PREFIX_3, PREFIX_4, PREFIX_5, PREFIX_6, PREFIX_7, PREFIX_8, PREFIX_9, PREFIX_10, PREFIX_11, PREFIX_12, PREFIX_13, PREFIX_14, PREFIX_15, PREFIX_16, PREFIX_17, PREFIX_18, PREFIX_19, PREFIX_20];
export const ALL_LEGACY = { LegacyButton, LegacyContainer1, LegacyContainer2, LegacyContainer3, LegacyContainer4, LegacyContainer5, LegacyContainer6, LegacyContainer7, LegacyContainer8, LegacyContainer9, LegacyContainer10, LegacyContainer11, LegacyContainer12, LegacyContainer13, LegacyContainer14, LegacyContainer15, LegacyContainer16 };

// JSX component in the barrel — forces this chunk to import from jsx-runtime,
// creating a potential edge that participates in cycles.
export function BarrelHeader() {
  return <div>Barrel ({ALL_PREFIXES.length} utils)</div>;
}
