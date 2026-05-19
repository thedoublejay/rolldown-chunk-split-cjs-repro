
import { useState } from "react";
import { Box, Button, Typography } from "@mui/material";

import { Shared8 } from "../../../shared/components/Shared8";
import { useAnalytics8 } from "../hooks/use-analytics-8";
export function Analytics7(props) {
  const [open, setOpen] = useState(false);
  const { keyed, prefix } = useAnalytics8(props.label);
  return <Box><Typography>{prefix}: {Object.keys(keyed).length}</Typography><Shared8 label="analytics7">item</Shared8><Button onClick={() => setOpen(!open)}>Toggle</Button></Box>;
}
export default Analytics7;
