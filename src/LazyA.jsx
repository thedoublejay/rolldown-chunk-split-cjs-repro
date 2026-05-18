import _ from "lodash";
import get from "lodash/get";
import has from "lodash/has";
import { utilA } from "./util-a.js";

const sample = { a: { value: 42 } };

export default function LazyA() {
  return (
    <div>
      <p>LazyA: _.toLower = {_.toLower("HELLO")}</p>
      <p>LazyA: get nested.value = {get(sample, ["a", "value"], 0)}</p>
      <p>LazyA: has a = {String(has(sample, ["a"]))}</p>
      <p>LazyA: utilA = {utilA(sample)}</p>
    </div>
  );
}
