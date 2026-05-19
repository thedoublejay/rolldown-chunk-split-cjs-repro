
import { useState } from "react";
import { Box, Button, Typography } from "@mui/material";

import { Shared2 } from "../../../shared/components/Shared2";
import { useImports2 } from "../hooks/use-imports-2";
export function Imports1(props) {
  const [open, setOpen] = useState(false);
  const { keyed, prefix } = useImports2(props.label);
  return <Box><Typography>{prefix}: {Object.keys(keyed).length}</Typography><Shared2 label="imports1">item</Shared2><Button onClick={() => setOpen(!open)}>Toggle</Button></Box>;
}
export default Imports1;
