
import { useState } from "react";
import { Box, Button, Typography } from "@mui/material";

import { Shared9 } from "../../../shared/components/Shared9";
import { useAlerts1 } from "../hooks/use-alerts-1";
export function Alerts8(props) {
  const [open, setOpen] = useState(false);
  const { keyed, prefix } = useAlerts1(props.label);
  return <Box><Typography>{prefix}: {Object.keys(keyed).length}</Typography><Shared9 label="alerts8">item</Shared9><Button onClick={() => setOpen(!open)}>Toggle</Button></Box>;
}
export default Alerts8;
