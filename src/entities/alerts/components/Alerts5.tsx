
import { useState } from "react";
import { Box, Button, Typography } from "@mui/material";

import { Shared6 } from "../../../shared/components/Shared6";
import { useAlerts6 } from "../hooks/use-alerts-6";
export function Alerts5(props) {
  const [open, setOpen] = useState(false);
  const { keyed, prefix } = useAlerts6(props.label);
  return <Box><Typography>{prefix}: {Object.keys(keyed).length}</Typography><Shared6 label="alerts5">item</Shared6><Button onClick={() => setOpen(!open)}>Toggle</Button></Box>;
}
export default Alerts5;
