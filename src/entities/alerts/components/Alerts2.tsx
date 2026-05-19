
import { useState } from "react";
import { Box, Button, Typography } from "@mui/material";

import { Shared3 } from "../../../shared/components/Shared3";
import { useAlerts3 } from "../hooks/use-alerts-3";
export function Alerts2(props) {
  const [open, setOpen] = useState(false);
  const { keyed, prefix } = useAlerts3(props.label);
  return <Box><Typography>{prefix}: {Object.keys(keyed).length}</Typography><Shared3 label="alerts2">item</Shared3><Button onClick={() => setOpen(!open)}>Toggle</Button></Box>;
}
export default Alerts2;
