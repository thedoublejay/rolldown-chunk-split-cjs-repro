
import { useState } from "react";
import { Box, Button, Typography } from "@mui/material";

import { Shared9 } from "../../../shared/components/Shared9";
import { useReports1 } from "../hooks/use-reports-1";
export function Reports8(props) {
  const [open, setOpen] = useState(false);
  const { keyed, prefix } = useReports1(props.label);
  return <Box><Typography>{prefix}: {Object.keys(keyed).length}</Typography><Shared9 label="reports8">item</Shared9><Button onClick={() => setOpen(!open)}>Toggle</Button></Box>;
}
export default Reports8;
