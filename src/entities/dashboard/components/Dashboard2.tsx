
import { useState } from "react";
import { Box, Button, Typography } from "@mui/material";

import { Shared3 } from "../../../shared/components/Shared3";
import { useDashboard3 } from "../hooks/use-dashboard-3";
export function Dashboard2(props) {
  const [open, setOpen] = useState(false);
  const { keyed, prefix } = useDashboard3(props.label);
  return <Box><Typography>{prefix}: {Object.keys(keyed).length}</Typography><Shared3 label="dashboard2">item</Shared3><Button onClick={() => setOpen(!open)}>Toggle</Button></Box>;
}
export default Dashboard2;
