
import { useState } from "react";
import { Box, Button, Typography } from "@mui/material";

import { Shared9 } from "../../../shared/components/Shared9";
import { useExports1 } from "../hooks/use-exports-1";
export function Exports8(props) {
  const [open, setOpen] = useState(false);
  const { keyed, prefix } = useExports1(props.label);
  return <Box><Typography>{prefix}: {Object.keys(keyed).length}</Typography><Shared9 label="exports8">item</Shared9><Button onClick={() => setOpen(!open)}>Toggle</Button></Box>;
}
export default Exports8;
