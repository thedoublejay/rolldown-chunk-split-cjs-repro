
import { useState } from "react";
import { Box, Button, Typography } from "@mui/material";

import { Shared8 } from "../../../shared/components/Shared8";
import { useLogs8 } from "../hooks/use-logs-8";
export function Logs7(props) {
  const [open, setOpen] = useState(false);
  const { keyed, prefix } = useLogs8(props.label);
  return <Box><Typography>{prefix}: {Object.keys(keyed).length}</Typography><Shared8 label="logs7">item</Shared8><Button onClick={() => setOpen(!open)}>Toggle</Button></Box>;
}
export default Logs7;
