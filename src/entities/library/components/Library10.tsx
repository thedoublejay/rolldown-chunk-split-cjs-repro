
import { useState } from "react";
import { Box, Button, Typography } from "@mui/material";

import { Shared11 } from "../../../shared/components/Shared11";
import { useLibrary3 } from "../hooks/use-library-3";
export function Library10(props) {
  const [open, setOpen] = useState(false);
  const { keyed, prefix } = useLibrary3(props.label);
  return <Box><Typography>{prefix}: {Object.keys(keyed).length}</Typography><Shared11 label="library10">item</Shared11><Button onClick={() => setOpen(!open)}>Toggle</Button></Box>;
}
export default Library10;
