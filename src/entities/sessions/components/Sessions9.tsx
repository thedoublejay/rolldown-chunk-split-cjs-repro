
import { useState } from "react";
import { Box, Button, Typography } from "@mui/material";
import LegacyContainer10 from "../../../legacy/containers/LegacyContainer10";
import { Shared10 } from "../../../shared/components/Shared10";
import { useSessions2 } from "../hooks/use-sessions-2";
export function Sessions9(props) {
  const [open, setOpen] = useState(false);
  const { keyed, prefix } = useSessions2(props.label);
  return <Box><Typography>{prefix}: {Object.keys(keyed).length}</Typography><Shared10 label="sessions9">item</Shared10><LegacyContainer10 title="sessions-9" /><Button onClick={() => setOpen(!open)}>Toggle</Button></Box>;
}
export default Sessions9;
