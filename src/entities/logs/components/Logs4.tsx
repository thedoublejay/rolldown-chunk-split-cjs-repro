
import { useState } from "react";
import { Box, Button, Typography } from "@mui/material";

import { Shared5 } from "../../../shared/components/Shared5";
import { useLogs5 } from "../hooks/use-logs-5";
export function Logs4(props) {
  const [open, setOpen] = useState(false);
  const { keyed, prefix } = useLogs5(props.label);
  return <Box><Typography>{prefix}: {Object.keys(keyed).length}</Typography><Shared5 label="logs4">item</Shared5><Button onClick={() => setOpen(!open)}>Toggle</Button></Box>;
}
export default Logs4;
