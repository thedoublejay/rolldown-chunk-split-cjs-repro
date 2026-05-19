
import { useState } from "react";
import { Box, Button, Typography } from "@mui/material";

import { Shared6 } from "../../../shared/components/Shared6";
import { useLogs6 } from "../hooks/use-logs-6";
export function Logs5(props) {
  const [open, setOpen] = useState(false);
  const { keyed, prefix } = useLogs6(props.label);
  return <Box><Typography>{prefix}: {Object.keys(keyed).length}</Typography><Shared6 label="logs5">item</Shared6><Button onClick={() => setOpen(!open)}>Toggle</Button></Box>;
}
export default Logs5;
