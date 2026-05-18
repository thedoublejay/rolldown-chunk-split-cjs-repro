import { useMutation } from "@tanstack/react-query";
import clsx from "clsx";
import get from "lodash/get";
import has from "lodash/has";
import isEmpty from "lodash/isEmpty";

const data = { user: { name: "test" } };

export default function LazyC() {
  const cls = clsx("c", "active");
  const _useMutation = useMutation;
  return (
    <div className={cls}>
      <p>LazyC: get user.name = {get(data, ["user", "name"], "?")}</p>
      <p>LazyC: has user = {String(has(data, ["user"]))}</p>
      <p>LazyC: isEmpty({}) = {String(isEmpty({}))}</p>
      <p>useMutation type: {typeof _useMutation}</p>
    </div>
  );
}
