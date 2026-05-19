
import { useState } from "react";
import { Box, Button, Typography } from "@mui/material";

import { Shared8 } from "../../../shared/components/Shared8";
import { useWorkflows8 } from "../hooks/use-workflows-8";
export function Workflows7(props) {
  const [open, setOpen] = useState(false);
  const { keyed, prefix } = useWorkflows8(props.label);
  return <Box><Typography>{prefix}: {Object.keys(keyed).length}</Typography><Shared8 label="workflows7">item</Shared8><Button onClick={() => setOpen(!open)}>Toggle</Button></Box>;
}
export default Workflows7;
