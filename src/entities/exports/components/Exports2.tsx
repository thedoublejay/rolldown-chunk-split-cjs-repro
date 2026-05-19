
import { useState } from "react";
import { Box, Button, Typography } from "@mui/material";

import { Shared3 } from "../../../shared/components/Shared3";
import { useExports3 } from "../hooks/use-exports-3";
export function Exports2(props) {
  const [open, setOpen] = useState(false);
  const { keyed, prefix } = useExports3(props.label);
  return <Box><Typography>{prefix}: {Object.keys(keyed).length}</Typography><Shared3 label="exports2">item</Shared3><Button onClick={() => setOpen(!open)}>Toggle</Button></Box>;
}
export default Exports2;
