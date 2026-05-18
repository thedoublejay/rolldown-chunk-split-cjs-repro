import _ from "lodash";
import get from "lodash/get";
import has from "lodash/has";
import uniqBy from "lodash/uniqBy";
import { utilB } from "./util-b.js";

const items = [{ b: { value: 1 } }];

export default function LazyB() {
  return (
    <>
      <p>LazyB: _.upperFirst = {_.upperFirst("hello")}</p>
      <p>LazyB: uniqBy = {uniqBy(items, "id").length}</p>
      <p>LazyB: get = {get(items[0], ["b", "value"], -1)}</p>
      <p>LazyB: has = {String(has(items[0], ["b"]))}</p>
      <p>LazyB: utilB = {utilB(items[0])}</p>
    </>
  );
}
