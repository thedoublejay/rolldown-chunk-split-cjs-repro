
import { useState } from "react";
import { Box, Button, Typography } from "@mui/material";

import { Shared11 } from "../../../shared/components/Shared11";
import { useReports3 } from "../hooks/use-reports-3";
export function Reports10(props) {
  const [open, setOpen] = useState(false);
  const { keyed, prefix } = useReports3(props.label);
  return <Box><Typography>{prefix}: {Object.keys(keyed).length}</Typography><Shared11 label="reports10">item</Shared11><Button onClick={() => setOpen(!open)}>Toggle</Button></Box>;
}
export default Reports10;
