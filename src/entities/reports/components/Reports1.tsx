
import { useState } from "react";
import { Box, Button, Typography } from "@mui/material";

import { Shared2 } from "../../../shared/components/Shared2";
import { useReports2 } from "../hooks/use-reports-2";
export function Reports1(props) {
  const [open, setOpen] = useState(false);
  const { keyed, prefix } = useReports2(props.label);
  return <Box><Typography>{prefix}: {Object.keys(keyed).length}</Typography><Shared2 label="reports1">item</Shared2><Button onClick={() => setOpen(!open)}>Toggle</Button></Box>;
}
export default Reports1;
