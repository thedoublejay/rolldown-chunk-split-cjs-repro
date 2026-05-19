
import { useState } from "react";
import { Box, Button, Typography } from "@mui/material";

import { Shared6 } from "../../../shared/components/Shared6";
import { useMetrics6 } from "../hooks/use-metrics-6";
export function Metrics5(props) {
  const [open, setOpen] = useState(false);
  const { keyed, prefix } = useMetrics6(props.label);
  return <Box><Typography>{prefix}: {Object.keys(keyed).length}</Typography><Shared6 label="metrics5">item</Shared6><Button onClick={() => setOpen(!open)}>Toggle</Button></Box>;
}
export default Metrics5;
