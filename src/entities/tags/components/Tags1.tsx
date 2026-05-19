
import { useState } from "react";
import { Box, Button, Typography } from "@mui/material";

import { Shared2 } from "../../../shared/components/Shared2";
import { useTags2 } from "../hooks/use-tags-2";
export function Tags1(props) {
  const [open, setOpen] = useState(false);
  const { keyed, prefix } = useTags2(props.label);
  return <Box><Typography>{prefix}: {Object.keys(keyed).length}</Typography><Shared2 label="tags1">item</Shared2><Button onClick={() => setOpen(!open)}>Toggle</Button></Box>;
}
export default Tags1;
