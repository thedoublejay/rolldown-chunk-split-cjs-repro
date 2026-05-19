
import { useState } from "react";
import { Box, Button, Typography } from "@mui/material";

import { Shared11 } from "../../../shared/components/Shared11";
import { useTags3 } from "../hooks/use-tags-3";
export function Tags10(props) {
  const [open, setOpen] = useState(false);
  const { keyed, prefix } = useTags3(props.label);
  return <Box><Typography>{prefix}: {Object.keys(keyed).length}</Typography><Shared11 label="tags10">item</Shared11><Button onClick={() => setOpen(!open)}>Toggle</Button></Box>;
}
export default Tags10;
