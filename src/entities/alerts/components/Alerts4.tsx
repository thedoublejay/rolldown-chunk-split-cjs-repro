
import { useState } from "react";
import { Box, Button, Typography } from "@mui/material";

import { Shared5 } from "../../../shared/components/Shared5";
import { useAlerts5 } from "../hooks/use-alerts-5";
export function Alerts4(props) {
  const [open, setOpen] = useState(false);
  const { keyed, prefix } = useAlerts5(props.label);
  return <Box><Typography>{prefix}: {Object.keys(keyed).length}</Typography><Shared5 label="alerts4">item</Shared5><Button onClick={() => setOpen(!open)}>Toggle</Button></Box>;
}
export default Alerts4;
