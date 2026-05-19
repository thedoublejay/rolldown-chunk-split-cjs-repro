
import { useState } from "react";
import { Box, Button, Typography } from "@mui/material";

import { Shared2 } from "../../../shared/components/Shared2";
import { useMetrics2 } from "../hooks/use-metrics-2";
export function Metrics1(props) {
  const [open, setOpen] = useState(false);
  const { keyed, prefix } = useMetrics2(props.label);
  return <Box><Typography>{prefix}: {Object.keys(keyed).length}</Typography><Shared2 label="metrics1">item</Shared2><Button onClick={() => setOpen(!open)}>Toggle</Button></Box>;
}
export default Metrics1;
