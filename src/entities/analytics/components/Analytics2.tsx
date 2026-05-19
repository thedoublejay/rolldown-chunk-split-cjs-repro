
import { useState } from "react";
import { Box, Button, Typography } from "@mui/material";

import { Shared3 } from "../../../shared/components/Shared3";
import { useAnalytics3 } from "../hooks/use-analytics-3";
export function Analytics2(props) {
  const [open, setOpen] = useState(false);
  const { keyed, prefix } = useAnalytics3(props.label);
  return <Box><Typography>{prefix}: {Object.keys(keyed).length}</Typography><Shared3 label="analytics2">item</Shared3><Button onClick={() => setOpen(!open)}>Toggle</Button></Box>;
}
export default Analytics2;
