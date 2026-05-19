
import { useState } from "react";
import { Box, Button, Typography } from "@mui/material";

import { Shared6 } from "../../../shared/components/Shared6";
import { useDashboard6 } from "../hooks/use-dashboard-6";
export function Dashboard5(props) {
  const [open, setOpen] = useState(false);
  const { keyed, prefix } = useDashboard6(props.label);
  return <Box><Typography>{prefix}: {Object.keys(keyed).length}</Typography><Shared6 label="dashboard5">item</Shared6><Button onClick={() => setOpen(!open)}>Toggle</Button></Box>;
}
export default Dashboard5;
