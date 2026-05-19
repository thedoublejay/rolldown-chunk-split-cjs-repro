
import { useState } from "react";
import { Box, Button, Typography } from "@mui/material";

import { Shared11 } from "../../../shared/components/Shared11";
import { useDashboard3 } from "../hooks/use-dashboard-3";
export function Dashboard10(props) {
  const [open, setOpen] = useState(false);
  const { keyed, prefix } = useDashboard3(props.label);
  return <Box><Typography>{prefix}: {Object.keys(keyed).length}</Typography><Shared11 label="dashboard10">item</Shared11><Button onClick={() => setOpen(!open)}>Toggle</Button></Box>;
}
export default Dashboard10;
