
import { useState } from "react";
import { Box, Button, Typography } from "@mui/material";

import { Shared2 } from "../../../shared/components/Shared2";
import { useWorkflows2 } from "../hooks/use-workflows-2";
export function Workflows1(props) {
  const [open, setOpen] = useState(false);
  const { keyed, prefix } = useWorkflows2(props.label);
  return <Box><Typography>{prefix}: {Object.keys(keyed).length}</Typography><Shared2 label="workflows1">item</Shared2><Button onClick={() => setOpen(!open)}>Toggle</Button></Box>;
}
export default Workflows1;
