
import { useState } from "react";
import { Box, Button, Typography } from "@mui/material";

import { Shared5 } from "../../../shared/components/Shared5";
import { useWorkflows5 } from "../hooks/use-workflows-5";
export function Workflows4(props) {
  const [open, setOpen] = useState(false);
  const { keyed, prefix } = useWorkflows5(props.label);
  return <Box><Typography>{prefix}: {Object.keys(keyed).length}</Typography><Shared5 label="workflows4">item</Shared5><Button onClick={() => setOpen(!open)}>Toggle</Button></Box>;
}
export default Workflows4;
