
import { useState } from "react";
import { Box, Button, Typography } from "@mui/material";

import { Shared11 } from "../../../shared/components/Shared11";
import { useImports3 } from "../hooks/use-imports-3";
export function Imports10(props) {
  const [open, setOpen] = useState(false);
  const { keyed, prefix } = useImports3(props.label);
  return <Box><Typography>{prefix}: {Object.keys(keyed).length}</Typography><Shared11 label="imports10">item</Shared11><Button onClick={() => setOpen(!open)}>Toggle</Button></Box>;
}
export default Imports10;
