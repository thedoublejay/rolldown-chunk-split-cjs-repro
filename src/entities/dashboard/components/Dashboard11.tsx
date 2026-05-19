
import { useState } from "react";
import { Box, Button, Typography } from "@mui/material";

import { Shared12 } from "../../../shared/components/Shared12";
import { useDashboard4 } from "../hooks/use-dashboard-4";
export function Dashboard11(props) {
  const [open, setOpen] = useState(false);
  const { keyed, prefix } = useDashboard4(props.label);
  return <Box><Typography>{prefix}: {Object.keys(keyed).length}</Typography><Shared12 label="dashboard11">item</Shared12><Button onClick={() => setOpen(!open)}>Toggle</Button></Box>;
}
export default Dashboard11;
