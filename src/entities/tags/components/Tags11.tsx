
import { useState } from "react";
import { Box, Button, Typography } from "@mui/material";

import { Shared12 } from "../../../shared/components/Shared12";
import { useTags4 } from "../hooks/use-tags-4";
export function Tags11(props) {
  const [open, setOpen] = useState(false);
  const { keyed, prefix } = useTags4(props.label);
  return <Box><Typography>{prefix}: {Object.keys(keyed).length}</Typography><Shared12 label="tags11">item</Shared12><Button onClick={() => setOpen(!open)}>Toggle</Button></Box>;
}
export default Tags11;
