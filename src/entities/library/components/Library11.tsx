
import { useState } from "react";
import { Box, Button, Typography } from "@mui/material";

import { Shared12 } from "../../../shared/components/Shared12";
import { useLibrary4 } from "../hooks/use-library-4";
export function Library11(props) {
  const [open, setOpen] = useState(false);
  const { keyed, prefix } = useLibrary4(props.label);
  return <Box><Typography>{prefix}: {Object.keys(keyed).length}</Typography><Shared12 label="library11">item</Shared12><Button onClick={() => setOpen(!open)}>Toggle</Button></Box>;
}
export default Library11;
