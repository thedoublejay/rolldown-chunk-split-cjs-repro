
import { useState } from "react";
import { Box, Button, Typography } from "@mui/material";

import { Shared5 } from "../../../shared/components/Shared5";
import { useSessions5 } from "../hooks/use-sessions-5";
export function Sessions4(props) {
  const [open, setOpen] = useState(false);
  const { keyed, prefix } = useSessions5(props.label);
  return <Box><Typography>{prefix}: {Object.keys(keyed).length}</Typography><Shared5 label="sessions4">item</Shared5><Button onClick={() => setOpen(!open)}>Toggle</Button></Box>;
}
export default Sessions4;
