
import { useState } from "react";
import { Box, Button, Typography } from "@mui/material";

import { Shared9 } from "../../../shared/components/Shared9";
import { useDashboard1 } from "../hooks/use-dashboard-1";
export function Dashboard8(props) {
  const [open, setOpen] = useState(false);
  const { keyed, prefix } = useDashboard1(props.label);
  return <Box><Typography>{prefix}: {Object.keys(keyed).length}</Typography><Shared9 label="dashboard8">item</Shared9><Button onClick={() => setOpen(!open)}>Toggle</Button></Box>;
}
export default Dashboard8;
