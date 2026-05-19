
import { useState } from "react";
import { Box, Button, Typography } from "@mui/material";

import { Shared6 } from "../../../shared/components/Shared6";
import { useReports6 } from "../hooks/use-reports-6";
export function Reports5(props) {
  const [open, setOpen] = useState(false);
  const { keyed, prefix } = useReports6(props.label);
  return <Box><Typography>{prefix}: {Object.keys(keyed).length}</Typography><Shared6 label="reports5">item</Shared6><Button onClick={() => setOpen(!open)}>Toggle</Button></Box>;
}
export default Reports5;
