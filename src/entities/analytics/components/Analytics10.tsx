
import { useState } from "react";
import { Box, Button, Typography } from "@mui/material";

import { Shared11 } from "../../../shared/components/Shared11";
import { useAnalytics3 } from "../hooks/use-analytics-3";
export function Analytics10(props) {
  const [open, setOpen] = useState(false);
  const { keyed, prefix } = useAnalytics3(props.label);
  return <Box><Typography>{prefix}: {Object.keys(keyed).length}</Typography><Shared11 label="analytics10">item</Shared11><Button onClick={() => setOpen(!open)}>Toggle</Button></Box>;
}
export default Analytics10;
