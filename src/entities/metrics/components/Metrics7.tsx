
import { useState } from "react";
import { Box, Button, Typography } from "@mui/material";

import { Shared8 } from "../../../shared/components/Shared8";
import { useMetrics8 } from "../hooks/use-metrics-8";
export function Metrics7(props) {
  const [open, setOpen] = useState(false);
  const { keyed, prefix } = useMetrics8(props.label);
  return <Box><Typography>{prefix}: {Object.keys(keyed).length}</Typography><Shared8 label="metrics7">item</Shared8><Button onClick={() => setOpen(!open)}>Toggle</Button></Box>;
}
export default Metrics7;
