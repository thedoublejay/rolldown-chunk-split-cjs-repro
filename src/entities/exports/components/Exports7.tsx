
import { useState } from "react";
import { Box, Button, Typography } from "@mui/material";

import { Shared8 } from "../../../shared/components/Shared8";
import { useExports8 } from "../hooks/use-exports-8";
export function Exports7(props) {
  const [open, setOpen] = useState(false);
  const { keyed, prefix } = useExports8(props.label);
  return <Box><Typography>{prefix}: {Object.keys(keyed).length}</Typography><Shared8 label="exports7">item</Shared8><Button onClick={() => setOpen(!open)}>Toggle</Button></Box>;
}
export default Exports7;
