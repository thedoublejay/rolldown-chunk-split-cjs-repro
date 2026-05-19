
import { useState } from "react";
import { Box, Button, Typography } from "@mui/material";

import { Shared6 } from "../../../shared/components/Shared6";
import { useSummaries6 } from "../hooks/use-summaries-6";
export function Summaries5(props) {
  const [open, setOpen] = useState(false);
  const { keyed, prefix } = useSummaries6(props.label);
  return <Box><Typography>{prefix}: {Object.keys(keyed).length}</Typography><Shared6 label="summaries5">item</Shared6><Button onClick={() => setOpen(!open)}>Toggle</Button></Box>;
}
export default Summaries5;
