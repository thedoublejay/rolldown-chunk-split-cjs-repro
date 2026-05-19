
import { useState } from "react";
import { Box, Button, Typography } from "@mui/material";

import { Shared9 } from "../../../shared/components/Shared9";
import { useImports1 } from "../hooks/use-imports-1";
export function Imports8(props) {
  const [open, setOpen] = useState(false);
  const { keyed, prefix } = useImports1(props.label);
  return <Box><Typography>{prefix}: {Object.keys(keyed).length}</Typography><Shared9 label="imports8">item</Shared9><Button onClick={() => setOpen(!open)}>Toggle</Button></Box>;
}
export default Imports8;
