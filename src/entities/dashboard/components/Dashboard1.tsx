
import { useState } from "react";
import { Box, Button, Typography } from "@mui/material";

import { Shared2 } from "../../../shared/components/Shared2";
import { useDashboard2 } from "../hooks/use-dashboard-2";
export function Dashboard1(props) {
  const [open, setOpen] = useState(false);
  const { keyed, prefix } = useDashboard2(props.label);
  return <Box><Typography>{prefix}: {Object.keys(keyed).length}</Typography><Shared2 label="dashboard1">item</Shared2><Button onClick={() => setOpen(!open)}>Toggle</Button></Box>;
}
export default Dashboard1;
