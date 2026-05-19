
import { useState } from "react";
import { Box, Button, Typography } from "@mui/material";
import LegacyContainer7 from "../../../legacy/containers/LegacyContainer7";
import { Shared7 } from "../../../shared/components/Shared7";
import { useDashboard7 } from "../hooks/use-dashboard-7";
export function Dashboard6(props) {
  const [open, setOpen] = useState(false);
  const { keyed, prefix } = useDashboard7(props.label);
  return <Box><Typography>{prefix}: {Object.keys(keyed).length}</Typography><Shared7 label="dashboard6">item</Shared7><LegacyContainer7 title="dashboard-6" /><Button onClick={() => setOpen(!open)}>Toggle</Button></Box>;
}
export default Dashboard6;
