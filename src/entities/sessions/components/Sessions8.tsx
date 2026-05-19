
import { useState } from "react";
import { Box, Button, Typography } from "@mui/material";

import { Shared9 } from "../../../shared/components/Shared9";
import { useSessions1 } from "../hooks/use-sessions-1";
export function Sessions8(props) {
  const [open, setOpen] = useState(false);
  const { keyed, prefix } = useSessions1(props.label);
  return <Box><Typography>{prefix}: {Object.keys(keyed).length}</Typography><Shared9 label="sessions8">item</Shared9><Button onClick={() => setOpen(!open)}>Toggle</Button></Box>;
}
export default Sessions8;
