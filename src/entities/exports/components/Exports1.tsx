
import { useState } from "react";
import { Box, Button, Typography } from "@mui/material";

import { Shared2 } from "../../../shared/components/Shared2";
import { useExports2 } from "../hooks/use-exports-2";
export function Exports1(props) {
  const [open, setOpen] = useState(false);
  const { keyed, prefix } = useExports2(props.label);
  return <Box><Typography>{prefix}: {Object.keys(keyed).length}</Typography><Shared2 label="exports1">item</Shared2><Button onClick={() => setOpen(!open)}>Toggle</Button></Box>;
}
export default Exports1;
