
import { useState } from "react";
import { Box, Button, Typography } from "@mui/material";

import { Shared12 } from "../../../shared/components/Shared12";
import { useLogs4 } from "../hooks/use-logs-4";
export function Logs11(props) {
  const [open, setOpen] = useState(false);
  const { keyed, prefix } = useLogs4(props.label);
  return <Box><Typography>{prefix}: {Object.keys(keyed).length}</Typography><Shared12 label="logs11">item</Shared12><Button onClick={() => setOpen(!open)}>Toggle</Button></Box>;
}
export default Logs11;
