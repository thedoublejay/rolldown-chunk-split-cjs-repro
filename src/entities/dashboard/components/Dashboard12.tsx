
import { useState } from "react";
import { Box, Button, Typography } from "@mui/material";
import LegacyContainer13 from "../../../legacy/containers/LegacyContainer13";
import { Shared13 } from "../../../shared/components/Shared13";
import { useDashboard5 } from "../hooks/use-dashboard-5";
export function Dashboard12(props) {
  const [open, setOpen] = useState(false);
  const { keyed, prefix } = useDashboard5(props.label);
  return <Box><Typography>{prefix}: {Object.keys(keyed).length}</Typography><Shared13 label="dashboard12">item</Shared13><LegacyContainer13 title="dashboard-12" /><Button onClick={() => setOpen(!open)}>Toggle</Button></Box>;
}
export default Dashboard12;
