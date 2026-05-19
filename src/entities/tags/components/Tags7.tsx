
import { useState } from "react";
import { Box, Button, Typography } from "@mui/material";

import { Shared8 } from "../../../shared/components/Shared8";
import { useTags8 } from "../hooks/use-tags-8";
export function Tags7(props) {
  const [open, setOpen] = useState(false);
  const { keyed, prefix } = useTags8(props.label);
  return <Box><Typography>{prefix}: {Object.keys(keyed).length}</Typography><Shared8 label="tags7">item</Shared8><Button onClick={() => setOpen(!open)}>Toggle</Button></Box>;
}
export default Tags7;
