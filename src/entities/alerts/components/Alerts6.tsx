
import { useState } from "react";
import { Box, Button, Typography } from "@mui/material";
import LegacyContainer7 from "../../../legacy/containers/LegacyContainer7";
import { Shared7 } from "../../../shared/components/Shared7";
import { useAlerts7 } from "../hooks/use-alerts-7";
export function Alerts6(props) {
  const [open, setOpen] = useState(false);
  const { keyed, prefix } = useAlerts7(props.label);
  return <Box><Typography>{prefix}: {Object.keys(keyed).length}</Typography><Shared7 label="alerts6">item</Shared7><LegacyContainer7 title="alerts-6" /><Button onClick={() => setOpen(!open)}>Toggle</Button></Box>;
}
export default Alerts6;
