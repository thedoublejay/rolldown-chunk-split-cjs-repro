
import { useState } from "react";
import { Box, Button, Typography } from "@mui/material";

import { Shared3 } from "../../../shared/components/Shared3";
import { useTags3 } from "../hooks/use-tags-3";
export function Tags2(props) {
  const [open, setOpen] = useState(false);
  const { keyed, prefix } = useTags3(props.label);
  return <Box><Typography>{prefix}: {Object.keys(keyed).length}</Typography><Shared3 label="tags2">item</Shared3><Button onClick={() => setOpen(!open)}>Toggle</Button></Box>;
}
export default Tags2;
