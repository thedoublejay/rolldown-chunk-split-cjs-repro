
import { useState } from "react";
import { Box, Button, Typography } from "@mui/material";

import { Shared6 } from "../../../shared/components/Shared6";
import { useWorkflows6 } from "../hooks/use-workflows-6";
export function Workflows5(props) {
  const [open, setOpen] = useState(false);
  const { keyed, prefix } = useWorkflows6(props.label);
  return <Box><Typography>{prefix}: {Object.keys(keyed).length}</Typography><Shared6 label="workflows5">item</Shared6><Button onClick={() => setOpen(!open)}>Toggle</Button></Box>;
}
export default Workflows5;
