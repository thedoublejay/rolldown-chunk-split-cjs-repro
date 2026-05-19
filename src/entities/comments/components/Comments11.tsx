
import { useState } from "react";
import { Box, Button, Typography } from "@mui/material";

import { Shared12 } from "../../../shared/components/Shared12";
import { useComments4 } from "../hooks/use-comments-4";
export function Comments11(props) {
  const [open, setOpen] = useState(false);
  const { keyed, prefix } = useComments4(props.label);
  return <Box><Typography>{prefix}: {Object.keys(keyed).length}</Typography><Shared12 label="comments11">item</Shared12><Button onClick={() => setOpen(!open)}>Toggle</Button></Box>;
}
export default Comments11;
