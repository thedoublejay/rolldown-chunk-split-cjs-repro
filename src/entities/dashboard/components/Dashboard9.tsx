
import { useState } from "react";
import { Box, Button, Typography } from "@mui/material";
import LegacyContainer10 from "../../../legacy/containers/LegacyContainer10";
import { Shared10 } from "../../../shared/components/Shared10";
import { useDashboard2 } from "../hooks/use-dashboard-2";
export function Dashboard9(props) {
  const [open, setOpen] = useState(false);
  const { keyed, prefix } = useDashboard2(props.label);
  return <Box><Typography>{prefix}: {Object.keys(keyed).length}</Typography><Shared10 label="dashboard9">item</Shared10><LegacyContainer10 title="dashboard-9" /><Button onClick={() => setOpen(!open)}>Toggle</Button></Box>;
}
export default Dashboard9;
