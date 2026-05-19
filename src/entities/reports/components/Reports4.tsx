
import { useState } from "react";
import { Box, Button, Typography } from "@mui/material";

import { Shared5 } from "../../../shared/components/Shared5";
import { useReports5 } from "../hooks/use-reports-5";
export function Reports4(props) {
  const [open, setOpen] = useState(false);
  const { keyed, prefix } = useReports5(props.label);
  return <Box><Typography>{prefix}: {Object.keys(keyed).length}</Typography><Shared5 label="reports4">item</Shared5><Button onClick={() => setOpen(!open)}>Toggle</Button></Box>;
}
export default Reports4;
