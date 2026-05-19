
import { useState } from "react";
import { Box, Button, Typography } from "@mui/material";

import { Shared9 } from "../../../shared/components/Shared9";
import { useMetrics1 } from "../hooks/use-metrics-1";
export function Metrics8(props) {
  const [open, setOpen] = useState(false);
  const { keyed, prefix } = useMetrics1(props.label);
  return <Box><Typography>{prefix}: {Object.keys(keyed).length}</Typography><Shared9 label="metrics8">item</Shared9><Button onClick={() => setOpen(!open)}>Toggle</Button></Box>;
}
export default Metrics8;
