
import { useState } from "react";
import { Box, Button, Typography } from "@mui/material";
import LegacyContainer4 from "../../../legacy/containers/LegacyContainer4";
import { Shared4 } from "../../../shared/components/Shared4";
import { useLogs4 } from "../hooks/use-logs-4";
export function Logs3(props) {
  const [open, setOpen] = useState(false);
  const { keyed, prefix } = useLogs4(props.label);
  return <Box><Typography>{prefix}: {Object.keys(keyed).length}</Typography><Shared4 label="logs3">item</Shared4><LegacyContainer4 title="logs-3" /><Button onClick={() => setOpen(!open)}>Toggle</Button></Box>;
}
export default Logs3;
