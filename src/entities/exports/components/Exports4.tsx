
import { useState } from "react";
import { Box, Button, Typography } from "@mui/material";

import { Shared5 } from "../../../shared/components/Shared5";
import { useExports5 } from "../hooks/use-exports-5";
export function Exports4(props) {
  const [open, setOpen] = useState(false);
  const { keyed, prefix } = useExports5(props.label);
  return <Box><Typography>{prefix}: {Object.keys(keyed).length}</Typography><Shared5 label="exports4">item</Shared5><Button onClick={() => setOpen(!open)}>Toggle</Button></Box>;
}
export default Exports4;
