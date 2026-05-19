
import { useState } from "react";
import { Box, Button, Typography } from "@mui/material";

import { Shared12 } from "../../../shared/components/Shared12";
import { useReports4 } from "../hooks/use-reports-4";
export function Reports11(props) {
  const [open, setOpen] = useState(false);
  const { keyed, prefix } = useReports4(props.label);
  return <Box><Typography>{prefix}: {Object.keys(keyed).length}</Typography><Shared12 label="reports11">item</Shared12><Button onClick={() => setOpen(!open)}>Toggle</Button></Box>;
}
export default Reports11;
