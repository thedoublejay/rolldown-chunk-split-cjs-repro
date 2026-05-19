
import { useState } from "react";
import { Box, Button, Typography } from "@mui/material";

import { Shared5 } from "../../../shared/components/Shared5";
import { useLibrary5 } from "../hooks/use-library-5";
export function Library4(props) {
  const [open, setOpen] = useState(false);
  const { keyed, prefix } = useLibrary5(props.label);
  return <Box><Typography>{prefix}: {Object.keys(keyed).length}</Typography><Shared5 label="library4">item</Shared5><Button onClick={() => setOpen(!open)}>Toggle</Button></Box>;
}
export default Library4;
