
import { useState } from "react";
import { Box, Button, Typography } from "@mui/material";

import { Shared3 } from "../../../shared/components/Shared3";
import { useImports3 } from "../hooks/use-imports-3";
export function Imports2(props) {
  const [open, setOpen] = useState(false);
  const { keyed, prefix } = useImports3(props.label);
  return <Box><Typography>{prefix}: {Object.keys(keyed).length}</Typography><Shared3 label="imports2">item</Shared3><Button onClick={() => setOpen(!open)}>Toggle</Button></Box>;
}
export default Imports2;
