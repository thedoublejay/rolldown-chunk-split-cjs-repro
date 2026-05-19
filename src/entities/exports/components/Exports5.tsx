
import { useState } from "react";
import { Box, Button, Typography } from "@mui/material";

import { Shared6 } from "../../../shared/components/Shared6";
import { useExports6 } from "../hooks/use-exports-6";
export function Exports5(props) {
  const [open, setOpen] = useState(false);
  const { keyed, prefix } = useExports6(props.label);
  return <Box><Typography>{prefix}: {Object.keys(keyed).length}</Typography><Shared6 label="exports5">item</Shared6><Button onClick={() => setOpen(!open)}>Toggle</Button></Box>;
}
export default Exports5;
