
import { useState } from "react";
import { Box, Button, Typography } from "@mui/material";

import { Shared6 } from "../../../shared/components/Shared6";
import { useImports6 } from "../hooks/use-imports-6";
export function Imports5(props) {
  const [open, setOpen] = useState(false);
  const { keyed, prefix } = useImports6(props.label);
  return <Box><Typography>{prefix}: {Object.keys(keyed).length}</Typography><Shared6 label="imports5">item</Shared6><Button onClick={() => setOpen(!open)}>Toggle</Button></Box>;
}
export default Imports5;
