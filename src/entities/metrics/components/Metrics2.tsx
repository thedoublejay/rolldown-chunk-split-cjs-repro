
import { useState } from "react";
import { Box, Button, Typography } from "@mui/material";

import { Shared3 } from "../../../shared/components/Shared3";
import { useMetrics3 } from "../hooks/use-metrics-3";
export function Metrics2(props) {
  const [open, setOpen] = useState(false);
  const { keyed, prefix } = useMetrics3(props.label);
  return <Box><Typography>{prefix}: {Object.keys(keyed).length}</Typography><Shared3 label="metrics2">item</Shared3><Button onClick={() => setOpen(!open)}>Toggle</Button></Box>;
}
export default Metrics2;
