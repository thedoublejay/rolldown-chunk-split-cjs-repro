
import { useState } from "react";
import { Box, Button, Typography } from "@mui/material";

import { Shared8 } from "../../../shared/components/Shared8";
import { useReports8 } from "../hooks/use-reports-8";
export function Reports7(props) {
  const [open, setOpen] = useState(false);
  const { keyed, prefix } = useReports8(props.label);
  return <Box><Typography>{prefix}: {Object.keys(keyed).length}</Typography><Shared8 label="reports7">item</Shared8><Button onClick={() => setOpen(!open)}>Toggle</Button></Box>;
}
export default Reports7;
