
import { useState } from "react";
import { Box, Button, Typography } from "@mui/material";

import { Shared5 } from "../../../shared/components/Shared5";
import { useComments5 } from "../hooks/use-comments-5";
export function Comments4(props) {
  const [open, setOpen] = useState(false);
  const { keyed, prefix } = useComments5(props.label);
  return <Box><Typography>{prefix}: {Object.keys(keyed).length}</Typography><Shared5 label="comments4">item</Shared5><Button onClick={() => setOpen(!open)}>Toggle</Button></Box>;
}
export default Comments4;
