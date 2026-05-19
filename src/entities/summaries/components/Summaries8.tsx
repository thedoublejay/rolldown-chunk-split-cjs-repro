
import { useState } from "react";
import { Box, Button, Typography } from "@mui/material";

import { Shared9 } from "../../../shared/components/Shared9";
import { useSummaries1 } from "../hooks/use-summaries-1";
export function Summaries8(props) {
  const [open, setOpen] = useState(false);
  const { keyed, prefix } = useSummaries1(props.label);
  return <Box><Typography>{prefix}: {Object.keys(keyed).length}</Typography><Shared9 label="summaries8">item</Shared9><Button onClick={() => setOpen(!open)}>Toggle</Button></Box>;
}
export default Summaries8;
