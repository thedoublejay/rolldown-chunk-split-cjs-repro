
import { useState } from "react";
import { Box, Button, Typography } from "@mui/material";

import { Shared12 } from "../../../shared/components/Shared12";
import { useWorkflows4 } from "../hooks/use-workflows-4";
export function Workflows11(props) {
  const [open, setOpen] = useState(false);
  const { keyed, prefix } = useWorkflows4(props.label);
  return <Box><Typography>{prefix}: {Object.keys(keyed).length}</Typography><Shared12 label="workflows11">item</Shared12><Button onClick={() => setOpen(!open)}>Toggle</Button></Box>;
}
export default Workflows11;
