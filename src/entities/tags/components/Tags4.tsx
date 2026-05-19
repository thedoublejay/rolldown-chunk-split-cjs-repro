
import { useState } from "react";
import { Box, Button, Typography } from "@mui/material";

import { Shared5 } from "../../../shared/components/Shared5";
import { useTags5 } from "../hooks/use-tags-5";
export function Tags4(props) {
  const [open, setOpen] = useState(false);
  const { keyed, prefix } = useTags5(props.label);
  return <Box><Typography>{prefix}: {Object.keys(keyed).length}</Typography><Shared5 label="tags4">item</Shared5><Button onClick={() => setOpen(!open)}>Toggle</Button></Box>;
}
export default Tags4;
