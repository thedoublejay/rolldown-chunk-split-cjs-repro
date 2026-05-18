import { useQueryClient } from "@tanstack/react-query";
import clsx from "clsx";
import get from "lodash/get";
import has from "lodash/has";
import uniqBy from "lodash/uniqBy";

const items = [{ id: 1, n: { v: 1 } }, { id: 1, n: { v: 2 } }, { id: 2, n: { v: 3 } }];

export default function LazyB() {
  const cls = clsx("b");
  const _useQueryClient = useQueryClient;
  return (
    <div className={cls}>
      <p>LazyB: uniqBy count = {uniqBy(items, "id").length}</p>
      <p>LazyB: get items[0].n.v = {get(items[0], ["n", "v"], -1)}</p>
      <p>LazyB: has items[0].n = {String(has(items[0], ["n"]))}</p>
      <p>useQueryClient type: {typeof _useQueryClient}</p>
    </div>
  );
}
