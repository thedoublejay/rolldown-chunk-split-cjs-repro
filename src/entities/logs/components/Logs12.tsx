
import { useState } from "react";
import { Box, Button, Typography } from "@mui/material";
import LegacyContainer13 from "../../../legacy/containers/LegacyContainer13";
import { Shared13 } from "../../../shared/components/Shared13";
import { useLogs5 } from "../hooks/use-logs-5";
export function Logs12(props) {
  const [open, setOpen] = useState(false);
  const { keyed, prefix } = useLogs5(props.label);
  return <Box><Typography>{prefix}: {Object.keys(keyed).length}</Typography><Shared13 label="logs12">item</Shared13><LegacyContainer13 title="logs-12" /><Button onClick={() => setOpen(!open)}>Toggle</Button></Box>;
}
export default Logs12;
