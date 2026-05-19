
import { useState } from "react";
import { Box, Button, Typography } from "@mui/material";

import { Shared12 } from "../../../shared/components/Shared12";
import { useMetrics4 } from "../hooks/use-metrics-4";
export function Metrics11(props) {
  const [open, setOpen] = useState(false);
  const { keyed, prefix } = useMetrics4(props.label);
  return <Box><Typography>{prefix}: {Object.keys(keyed).length}</Typography><Shared12 label="metrics11">item</Shared12><Button onClick={() => setOpen(!open)}>Toggle</Button></Box>;
}
export default Metrics11;
