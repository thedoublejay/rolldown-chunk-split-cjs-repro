
import { useState } from "react";
import { Box, Button, Typography } from "@mui/material";

import { Shared11 } from "../../../shared/components/Shared11";
import { useWorkflows3 } from "../hooks/use-workflows-3";
export function Workflows10(props) {
  const [open, setOpen] = useState(false);
  const { keyed, prefix } = useWorkflows3(props.label);
  return <Box><Typography>{prefix}: {Object.keys(keyed).length}</Typography><Shared11 label="workflows10">item</Shared11><Button onClick={() => setOpen(!open)}>Toggle</Button></Box>;
}
export default Workflows10;
