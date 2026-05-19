
import { useState } from "react";
import { Box, Button, Typography } from "@mui/material";
import LegacyContainer7 from "../../../legacy/containers/LegacyContainer7";
import { Shared7 } from "../../../shared/components/Shared7";
import { useSessions7 } from "../hooks/use-sessions-7";
export function Sessions6(props) {
  const [open, setOpen] = useState(false);
  const { keyed, prefix } = useSessions7(props.label);
  return <Box><Typography>{prefix}: {Object.keys(keyed).length}</Typography><Shared7 label="sessions6">item</Shared7><LegacyContainer7 title="sessions-6" /><Button onClick={() => setOpen(!open)}>Toggle</Button></Box>;
}
export default Sessions6;
