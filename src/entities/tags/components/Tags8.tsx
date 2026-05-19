
import { useState } from "react";
import { Box, Button, Typography } from "@mui/material";

import { Shared9 } from "../../../shared/components/Shared9";
import { useTags1 } from "../hooks/use-tags-1";
export function Tags8(props) {
  const [open, setOpen] = useState(false);
  const { keyed, prefix } = useTags1(props.label);
  return <Box><Typography>{prefix}: {Object.keys(keyed).length}</Typography><Shared9 label="tags8">item</Shared9><Button onClick={() => setOpen(!open)}>Toggle</Button></Box>;
}
export default Tags8;
