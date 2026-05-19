
import { useState } from "react";
import { Box, Button, Typography } from "@mui/material";

import { Shared5 } from "../../../shared/components/Shared5";
import { useImports5 } from "../hooks/use-imports-5";
export function Imports4(props) {
  const [open, setOpen] = useState(false);
  const { keyed, prefix } = useImports5(props.label);
  return <Box><Typography>{prefix}: {Object.keys(keyed).length}</Typography><Shared5 label="imports4">item</Shared5><Button onClick={() => setOpen(!open)}>Toggle</Button></Box>;
}
export default Imports4;
