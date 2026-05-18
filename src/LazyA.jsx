import { Button } from "@mui/material";
import { withStyles } from "tss-react/mui";
import get from "lodash/get";
import has from "lodash/has";

// Mimics a legacy class-styles component (tss-react/withStyles)
// that imports CJS submodules from lodash. The failing real-world
// chunk had this exact shape.
const styles = {
  root: { color: "blue" },
};

function LazyAComponent(props) {
  const sample = { nested: { value: 42 } };
  return (
    <div className={get(props, ["className"], "")}>
      <p>LazyA: get nested.value = {get(sample, ["nested", "value"], 0)}</p>
      <p>LazyA: has nested = {String(has(sample, ["nested"]))}</p>
      <Button variant="contained">MUI Button</Button>
    </div>
  );
}

export default withStyles(LazyAComponent, styles);
