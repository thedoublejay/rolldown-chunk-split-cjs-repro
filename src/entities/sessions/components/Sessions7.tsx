
import { useState } from "react";
import { Box, Button, Typography } from "@mui/material";

import { Shared8 } from "../../../shared/components/Shared8";
import { useSessions8 } from "../hooks/use-sessions-8";
export function Sessions7(props) {
  const [open, setOpen] = useState(false);
  const { keyed, prefix } = useSessions8(props.label);
  return <Box><Typography>{prefix}: {Object.keys(keyed).length}</Typography><Shared8 label="sessions7">item</Shared8><Button onClick={() => setOpen(!open)}>Toggle</Button></Box>;
}
export default Sessions7;
