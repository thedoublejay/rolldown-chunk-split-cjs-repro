
import { useState } from "react";
import { Box, Button, Typography } from "@mui/material";

import { Shared11 } from "../../../shared/components/Shared11";
import { useSessions3 } from "../hooks/use-sessions-3";
export function Sessions10(props) {
  const [open, setOpen] = useState(false);
  const { keyed, prefix } = useSessions3(props.label);
  return <Box><Typography>{prefix}: {Object.keys(keyed).length}</Typography><Shared11 label="sessions10">item</Shared11><Button onClick={() => setOpen(!open)}>Toggle</Button></Box>;
}
export default Sessions10;
