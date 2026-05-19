
import { useState } from "react";
import { Box, Button, Typography } from "@mui/material";

import { Shared11 } from "../../../shared/components/Shared11";
import { useComments3 } from "../hooks/use-comments-3";
export function Comments10(props) {
  const [open, setOpen] = useState(false);
  const { keyed, prefix } = useComments3(props.label);
  return <Box><Typography>{prefix}: {Object.keys(keyed).length}</Typography><Shared11 label="comments10">item</Shared11><Button onClick={() => setOpen(!open)}>Toggle</Button></Box>;
}
export default Comments10;
