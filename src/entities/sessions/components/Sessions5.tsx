
import { useState } from "react";
import { Box, Button, Typography } from "@mui/material";

import { Shared6 } from "../../../shared/components/Shared6";
import { useSessions6 } from "../hooks/use-sessions-6";
export function Sessions5(props) {
  const [open, setOpen] = useState(false);
  const { keyed, prefix } = useSessions6(props.label);
  return <Box><Typography>{prefix}: {Object.keys(keyed).length}</Typography><Shared6 label="sessions5">item</Shared6><Button onClick={() => setOpen(!open)}>Toggle</Button></Box>;
}
export default Sessions5;
