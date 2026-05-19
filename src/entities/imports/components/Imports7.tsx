
import { useState } from "react";
import { Box, Button, Typography } from "@mui/material";

import { Shared8 } from "../../../shared/components/Shared8";
import { useImports8 } from "../hooks/use-imports-8";
export function Imports7(props) {
  const [open, setOpen] = useState(false);
  const { keyed, prefix } = useImports8(props.label);
  return <Box><Typography>{prefix}: {Object.keys(keyed).length}</Typography><Shared8 label="imports7">item</Shared8><Button onClick={() => setOpen(!open)}>Toggle</Button></Box>;
}
export default Imports7;
