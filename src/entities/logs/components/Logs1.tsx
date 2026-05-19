
import { useState } from "react";
import { Box, Button, Typography } from "@mui/material";

import { Shared2 } from "../../../shared/components/Shared2";
import { useLogs2 } from "../hooks/use-logs-2";
export function Logs1(props) {
  const [open, setOpen] = useState(false);
  const { keyed, prefix } = useLogs2(props.label);
  return <Box><Typography>{prefix}: {Object.keys(keyed).length}</Typography><Shared2 label="logs1">item</Shared2><Button onClick={() => setOpen(!open)}>Toggle</Button></Box>;
}
export default Logs1;
