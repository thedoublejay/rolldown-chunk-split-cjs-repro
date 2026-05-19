
import { useState } from "react";
import { Box, Button, Typography } from "@mui/material";

import { Shared9 } from "../../../shared/components/Shared9";
import { useLibrary1 } from "../hooks/use-library-1";
export function Library8(props) {
  const [open, setOpen] = useState(false);
  const { keyed, prefix } = useLibrary1(props.label);
  return <Box><Typography>{prefix}: {Object.keys(keyed).length}</Typography><Shared9 label="library8">item</Shared9><Button onClick={() => setOpen(!open)}>Toggle</Button></Box>;
}
export default Library8;
