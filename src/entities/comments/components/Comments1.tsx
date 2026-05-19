
import { useState } from "react";
import { Box, Button, Typography } from "@mui/material";

import { Shared2 } from "../../../shared/components/Shared2";
import { useComments2 } from "../hooks/use-comments-2";
export function Comments1(props) {
  const [open, setOpen] = useState(false);
  const { keyed, prefix } = useComments2(props.label);
  return <Box><Typography>{prefix}: {Object.keys(keyed).length}</Typography><Shared2 label="comments1">item</Shared2><Button onClick={() => setOpen(!open)}>Toggle</Button></Box>;
}
export default Comments1;
