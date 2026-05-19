
import { useState } from "react";
import { Box, Button, Typography } from "@mui/material";

import { Shared9 } from "../../../shared/components/Shared9";
import { useAnalytics1 } from "../hooks/use-analytics-1";
export function Analytics8(props) {
  const [open, setOpen] = useState(false);
  const { keyed, prefix } = useAnalytics1(props.label);
  return <Box><Typography>{prefix}: {Object.keys(keyed).length}</Typography><Shared9 label="analytics8">item</Shared9><Button onClick={() => setOpen(!open)}>Toggle</Button></Box>;
}
export default Analytics8;
