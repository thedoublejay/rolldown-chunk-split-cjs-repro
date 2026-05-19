
import { useState } from "react";
import { Box, Button, Typography } from "@mui/material";

import { Shared3 } from "../../../shared/components/Shared3";
import { useLogs3 } from "../hooks/use-logs-3";
export function Logs2(props) {
  const [open, setOpen] = useState(false);
  const { keyed, prefix } = useLogs3(props.label);
  return <Box><Typography>{prefix}: {Object.keys(keyed).length}</Typography><Shared3 label="logs2">item</Shared3><Button onClick={() => setOpen(!open)}>Toggle</Button></Box>;
}
export default Logs2;
