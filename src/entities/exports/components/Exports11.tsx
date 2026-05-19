
import { useState } from "react";
import { Box, Button, Typography } from "@mui/material";

import { Shared12 } from "../../../shared/components/Shared12";
import { useExports4 } from "../hooks/use-exports-4";
export function Exports11(props) {
  const [open, setOpen] = useState(false);
  const { keyed, prefix } = useExports4(props.label);
  return <Box><Typography>{prefix}: {Object.keys(keyed).length}</Typography><Shared12 label="exports11">item</Shared12><Button onClick={() => setOpen(!open)}>Toggle</Button></Box>;
}
export default Exports11;
