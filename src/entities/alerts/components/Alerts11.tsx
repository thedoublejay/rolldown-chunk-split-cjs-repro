
import { useState } from "react";
import { Box, Button, Typography } from "@mui/material";

import { Shared12 } from "../../../shared/components/Shared12";
import { useAlerts4 } from "../hooks/use-alerts-4";
export function Alerts11(props) {
  const [open, setOpen] = useState(false);
  const { keyed, prefix } = useAlerts4(props.label);
  return <Box><Typography>{prefix}: {Object.keys(keyed).length}</Typography><Shared12 label="alerts11">item</Shared12><Button onClick={() => setOpen(!open)}>Toggle</Button></Box>;
}
export default Alerts11;
