
import { useState } from "react";
import { Box, Button, Typography } from "@mui/material";

import { Shared6 } from "../../../shared/components/Shared6";
import { useAnalytics6 } from "../hooks/use-analytics-6";
export function Analytics5(props) {
  const [open, setOpen] = useState(false);
  const { keyed, prefix } = useAnalytics6(props.label);
  return <Box><Typography>{prefix}: {Object.keys(keyed).length}</Typography><Shared6 label="analytics5">item</Shared6><Button onClick={() => setOpen(!open)}>Toggle</Button></Box>;
}
export default Analytics5;
