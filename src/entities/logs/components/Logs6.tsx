
import { useState } from "react";
import { Box, Button, Typography } from "@mui/material";
import LegacyContainer7 from "../../../legacy/containers/LegacyContainer7";
import { Shared7 } from "../../../shared/components/Shared7";
import { useLogs7 } from "../hooks/use-logs-7";
export function Logs6(props) {
  const [open, setOpen] = useState(false);
  const { keyed, prefix } = useLogs7(props.label);
  return <Box><Typography>{prefix}: {Object.keys(keyed).length}</Typography><Shared7 label="logs6">item</Shared7><LegacyContainer7 title="logs-6" /><Button onClick={() => setOpen(!open)}>Toggle</Button></Box>;
}
export default Logs6;
