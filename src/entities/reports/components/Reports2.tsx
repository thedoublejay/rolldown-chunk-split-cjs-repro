
import { useState } from "react";
import { Box, Button, Typography } from "@mui/material";

import { Shared3 } from "../../../shared/components/Shared3";
import { useReports3 } from "../hooks/use-reports-3";
export function Reports2(props) {
  const [open, setOpen] = useState(false);
  const { keyed, prefix } = useReports3(props.label);
  return <Box><Typography>{prefix}: {Object.keys(keyed).length}</Typography><Shared3 label="reports2">item</Shared3><Button onClick={() => setOpen(!open)}>Toggle</Button></Box>;
}
export default Reports2;
