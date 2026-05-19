
import { useState } from "react";
import { Box, Button, Typography } from "@mui/material";

import { Shared8 } from "../../../shared/components/Shared8";
import { useAlerts8 } from "../hooks/use-alerts-8";
export function Alerts7(props) {
  const [open, setOpen] = useState(false);
  const { keyed, prefix } = useAlerts8(props.label);
  return <Box><Typography>{prefix}: {Object.keys(keyed).length}</Typography><Shared8 label="alerts7">item</Shared8><Button onClick={() => setOpen(!open)}>Toggle</Button></Box>;
}
export default Alerts7;
