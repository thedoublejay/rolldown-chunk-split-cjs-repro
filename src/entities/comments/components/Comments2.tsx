
import { useState } from "react";
import { Box, Button, Typography } from "@mui/material";

import { Shared3 } from "../../../shared/components/Shared3";
import { useComments3 } from "../hooks/use-comments-3";
export function Comments2(props) {
  const [open, setOpen] = useState(false);
  const { keyed, prefix } = useComments3(props.label);
  return <Box><Typography>{prefix}: {Object.keys(keyed).length}</Typography><Shared3 label="comments2">item</Shared3><Button onClick={() => setOpen(!open)}>Toggle</Button></Box>;
}
export default Comments2;
