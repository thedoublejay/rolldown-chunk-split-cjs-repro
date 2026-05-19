
import { useState } from "react";
import { Box, Button, Typography } from "@mui/material";

import { Shared5 } from "../../../shared/components/Shared5";
import { useDashboard5 } from "../hooks/use-dashboard-5";
export function Dashboard4(props) {
  const [open, setOpen] = useState(false);
  const { keyed, prefix } = useDashboard5(props.label);
  return <Box><Typography>{prefix}: {Object.keys(keyed).length}</Typography><Shared5 label="dashboard4">item</Shared5><Button onClick={() => setOpen(!open)}>Toggle</Button></Box>;
}
export default Dashboard4;
