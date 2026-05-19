
import { useState } from "react";
import { Box, Button, Typography } from "@mui/material";

import { Shared11 } from "../../../shared/components/Shared11";
import { useAlerts3 } from "../hooks/use-alerts-3";
export function Alerts10(props) {
  const [open, setOpen] = useState(false);
  const { keyed, prefix } = useAlerts3(props.label);
  return <Box><Typography>{prefix}: {Object.keys(keyed).length}</Typography><Shared11 label="alerts10">item</Shared11><Button onClick={() => setOpen(!open)}>Toggle</Button></Box>;
}
export default Alerts10;
