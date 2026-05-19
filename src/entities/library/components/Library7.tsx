
import { useState } from "react";
import { Box, Button, Typography } from "@mui/material";

import { Shared8 } from "../../../shared/components/Shared8";
import { useLibrary8 } from "../hooks/use-library-8";
export function Library7(props) {
  const [open, setOpen] = useState(false);
  const { keyed, prefix } = useLibrary8(props.label);
  return <Box><Typography>{prefix}: {Object.keys(keyed).length}</Typography><Shared8 label="library7">item</Shared8><Button onClick={() => setOpen(!open)}>Toggle</Button></Box>;
}
export default Library7;
