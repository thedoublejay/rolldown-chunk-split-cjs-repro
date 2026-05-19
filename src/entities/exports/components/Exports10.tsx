
import { useState } from "react";
import { Box, Button, Typography } from "@mui/material";

import { Shared11 } from "../../../shared/components/Shared11";
import { useExports3 } from "../hooks/use-exports-3";
export function Exports10(props) {
  const [open, setOpen] = useState(false);
  const { keyed, prefix } = useExports3(props.label);
  return <Box><Typography>{prefix}: {Object.keys(keyed).length}</Typography><Shared11 label="exports10">item</Shared11><Button onClick={() => setOpen(!open)}>Toggle</Button></Box>;
}
export default Exports10;
