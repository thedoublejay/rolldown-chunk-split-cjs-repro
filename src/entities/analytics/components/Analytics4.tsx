
import { useState } from "react";
import { Box, Button, Typography } from "@mui/material";

import { Shared5 } from "../../../shared/components/Shared5";
import { useAnalytics5 } from "../hooks/use-analytics-5";
export function Analytics4(props) {
  const [open, setOpen] = useState(false);
  const { keyed, prefix } = useAnalytics5(props.label);
  return <Box><Typography>{prefix}: {Object.keys(keyed).length}</Typography><Shared5 label="analytics4">item</Shared5><Button onClick={() => setOpen(!open)}>Toggle</Button></Box>;
}
export default Analytics4;
