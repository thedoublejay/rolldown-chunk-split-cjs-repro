
import { useState } from "react";
import { Box, Button, Typography } from "@mui/material";
import LegacyContainer13 from "../../../legacy/containers/LegacyContainer13";
import { Shared13 } from "../../../shared/components/Shared13";
import { useSessions5 } from "../hooks/use-sessions-5";
export function Sessions12(props) {
  const [open, setOpen] = useState(false);
  const { keyed, prefix } = useSessions5(props.label);
  return <Box><Typography>{prefix}: {Object.keys(keyed).length}</Typography><Shared13 label="sessions12">item</Shared13><LegacyContainer13 title="sessions-12" /><Button onClick={() => setOpen(!open)}>Toggle</Button></Box>;
}
export default Sessions12;
