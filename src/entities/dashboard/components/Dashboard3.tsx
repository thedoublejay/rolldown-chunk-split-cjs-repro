
import { useState } from "react";
import { Box, Button, Typography } from "@mui/material";
import LegacyContainer4 from "../../../legacy/containers/LegacyContainer4";
import { Shared4 } from "../../../shared/components/Shared4";
import { useDashboard4 } from "../hooks/use-dashboard-4";
export function Dashboard3(props) {
  const [open, setOpen] = useState(false);
  const { keyed, prefix } = useDashboard4(props.label);
  return <Box><Typography>{prefix}: {Object.keys(keyed).length}</Typography><Shared4 label="dashboard3">item</Shared4><LegacyContainer4 title="dashboard-3" /><Button onClick={() => setOpen(!open)}>Toggle</Button></Box>;
}
export default Dashboard3;
