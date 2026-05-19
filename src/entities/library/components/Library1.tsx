
import { useState } from "react";
import { Box, Button, Typography } from "@mui/material";

import { Shared2 } from "../../../shared/components/Shared2";
import { useLibrary2 } from "../hooks/use-library-2";
export function Library1(props) {
  const [open, setOpen] = useState(false);
  const { keyed, prefix } = useLibrary2(props.label);
  return <Box><Typography>{prefix}: {Object.keys(keyed).length}</Typography><Shared2 label="library1">item</Shared2><Button onClick={() => setOpen(!open)}>Toggle</Button></Box>;
}
export default Library1;
