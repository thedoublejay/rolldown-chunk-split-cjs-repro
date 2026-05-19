
import { useState } from "react";
import { Box, Button, Typography } from "@mui/material";
import LegacyContainer10 from "../../../legacy/containers/LegacyContainer10";
import { Shared10 } from "../../../shared/components/Shared10";
import { useAlerts2 } from "../hooks/use-alerts-2";
export function Alerts9(props) {
  const [open, setOpen] = useState(false);
  const { keyed, prefix } = useAlerts2(props.label);
  return <Box><Typography>{prefix}: {Object.keys(keyed).length}</Typography><Shared10 label="alerts9">item</Shared10><LegacyContainer10 title="alerts-9" /><Button onClick={() => setOpen(!open)}>Toggle</Button></Box>;
}
export default Alerts9;
