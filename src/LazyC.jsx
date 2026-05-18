import _ from "lodash";
import get from "lodash/get";
import has from "lodash/has";
import isEmpty from "lodash/isEmpty";
import { utilA } from "./util-a.js";
import { utilB } from "./util-b.js";

const data = { a: { value: 99 } };

export default function LazyC() {
  return (
    <>
      <p>LazyC: _.kebabCase = {_.kebabCase("Some Mixed Case")}</p>
      <p>LazyC: get = {get(data, ["a", "value"], "?")}</p>
      <p>LazyC: has = {String(has(data, ["a"]))}</p>
      <p>LazyC: isEmpty = {String(isEmpty({}))}</p>
      <p>LazyC: utilA = {utilA(data)}</p>
      <p>LazyC: utilB = {utilB({ b: { value: 7 } })}</p>
    </>
  );
}
