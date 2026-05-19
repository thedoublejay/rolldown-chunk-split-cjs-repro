
import { useState } from "react";
import { Box, Button, Typography } from "@mui/material";
import LegacyContainer4 from "../../../legacy/containers/LegacyContainer4";
import { Shared4 } from "../../../shared/components/Shared4";
import { useSessions4 } from "../hooks/use-sessions-4";
export function Sessions3(props) {
  const [open, setOpen] = useState(false);
  const { keyed, prefix } = useSessions4(props.label);
  return <Box><Typography>{prefix}: {Object.keys(keyed).length}</Typography><Shared4 label="sessions3">item</Shared4><LegacyContainer4 title="sessions-3" /><Button onClick={() => setOpen(!open)}>Toggle</Button></Box>;
}
export default Sessions3;
