
import { useState } from "react";
import { Box, Button, Typography } from "@mui/material";

import { Shared2 } from "../../../shared/components/Shared2";
import { useSessions2 } from "../hooks/use-sessions-2";
export function Sessions1(props) {
  const [open, setOpen] = useState(false);
  const { keyed, prefix } = useSessions2(props.label);
  return <Box><Typography>{prefix}: {Object.keys(keyed).length}</Typography><Shared2 label="sessions1">item</Shared2><Button onClick={() => setOpen(!open)}>Toggle</Button></Box>;
}
export default Sessions1;
