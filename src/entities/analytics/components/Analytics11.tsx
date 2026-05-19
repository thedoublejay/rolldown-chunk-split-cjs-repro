
import { useState } from "react";
import { Box, Button, Typography } from "@mui/material";

import { Shared12 } from "../../../shared/components/Shared12";
import { useAnalytics4 } from "../hooks/use-analytics-4";
export function Analytics11(props) {
  const [open, setOpen] = useState(false);
  const { keyed, prefix } = useAnalytics4(props.label);
  return <Box><Typography>{prefix}: {Object.keys(keyed).length}</Typography><Shared12 label="analytics11">item</Shared12><Button onClick={() => setOpen(!open)}>Toggle</Button></Box>;
}
export default Analytics11;
