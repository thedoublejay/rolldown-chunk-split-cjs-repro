
import { useState } from "react";
import { Box, Button, Typography } from "@mui/material";

import { Shared6 } from "../../../shared/components/Shared6";
import { useComments6 } from "../hooks/use-comments-6";
export function Comments5(props) {
  const [open, setOpen] = useState(false);
  const { keyed, prefix } = useComments6(props.label);
  return <Box><Typography>{prefix}: {Object.keys(keyed).length}</Typography><Shared6 label="comments5">item</Shared6><Button onClick={() => setOpen(!open)}>Toggle</Button></Box>;
}
export default Comments5;
