
import { useState } from "react";
import { Box, Button, Typography } from "@mui/material";

import { Shared6 } from "../../../shared/components/Shared6";
import { useLibrary6 } from "../hooks/use-library-6";
export function Library5(props) {
  const [open, setOpen] = useState(false);
  const { keyed, prefix } = useLibrary6(props.label);
  return <Box><Typography>{prefix}: {Object.keys(keyed).length}</Typography><Shared6 label="library5">item</Shared6><Button onClick={() => setOpen(!open)}>Toggle</Button></Box>;
}
export default Library5;
