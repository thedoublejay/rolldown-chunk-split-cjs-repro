
import { useState } from "react";
import { Box, Button, Typography } from "@mui/material";

import { Shared11 } from "../../../shared/components/Shared11";
import { useMetrics3 } from "../hooks/use-metrics-3";
export function Metrics10(props) {
  const [open, setOpen] = useState(false);
  const { keyed, prefix } = useMetrics3(props.label);
  return <Box><Typography>{prefix}: {Object.keys(keyed).length}</Typography><Shared11 label="metrics10">item</Shared11><Button onClick={() => setOpen(!open)}>Toggle</Button></Box>;
}
export default Metrics10;
