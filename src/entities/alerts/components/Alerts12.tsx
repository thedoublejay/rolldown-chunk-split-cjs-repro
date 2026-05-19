
import { useState } from "react";
import { Box, Button, Typography } from "@mui/material";
import LegacyContainer13 from "../../../legacy/containers/LegacyContainer13";
import { Shared13 } from "../../../shared/components/Shared13";
import { useAlerts5 } from "../hooks/use-alerts-5";
export function Alerts12(props) {
  const [open, setOpen] = useState(false);
  const { keyed, prefix } = useAlerts5(props.label);
  return <Box><Typography>{prefix}: {Object.keys(keyed).length}</Typography><Shared13 label="alerts12">item</Shared13><LegacyContainer13 title="alerts-12" /><Button onClick={() => setOpen(!open)}>Toggle</Button></Box>;
}
export default Alerts12;
