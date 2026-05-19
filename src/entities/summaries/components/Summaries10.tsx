
import { useState } from "react";
import { Box, Button, Typography } from "@mui/material";

import { Shared11 } from "../../../shared/components/Shared11";
import { useSummaries3 } from "../hooks/use-summaries-3";
export function Summaries10(props) {
  const [open, setOpen] = useState(false);
  const { keyed, prefix } = useSummaries3(props.label);
  return <Box><Typography>{prefix}: {Object.keys(keyed).length}</Typography><Shared11 label="summaries10">item</Shared11><Button onClick={() => setOpen(!open)}>Toggle</Button></Box>;
}
export default Summaries10;
