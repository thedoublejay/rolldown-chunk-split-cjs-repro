
import { useState } from "react";
import { Box, Button, Typography } from "@mui/material";

import { Shared9 } from "../../../shared/components/Shared9";
import { useWorkflows1 } from "../hooks/use-workflows-1";
export function Workflows8(props) {
  const [open, setOpen] = useState(false);
  const { keyed, prefix } = useWorkflows1(props.label);
  return <Box><Typography>{prefix}: {Object.keys(keyed).length}</Typography><Shared9 label="workflows8">item</Shared9><Button onClick={() => setOpen(!open)}>Toggle</Button></Box>;
}
export default Workflows8;
