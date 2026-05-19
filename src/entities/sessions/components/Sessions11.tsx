
import { useState } from "react";
import { Box, Button, Typography } from "@mui/material";

import { Shared12 } from "../../../shared/components/Shared12";
import { useSessions4 } from "../hooks/use-sessions-4";
export function Sessions11(props) {
  const [open, setOpen] = useState(false);
  const { keyed, prefix } = useSessions4(props.label);
  return <Box><Typography>{prefix}: {Object.keys(keyed).length}</Typography><Shared12 label="sessions11">item</Shared12><Button onClick={() => setOpen(!open)}>Toggle</Button></Box>;
}
export default Sessions11;
