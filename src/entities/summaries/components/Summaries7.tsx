
import { useState } from "react";
import { Box, Button, Typography } from "@mui/material";

import { Shared8 } from "../../../shared/components/Shared8";
import { useSummaries8 } from "../hooks/use-summaries-8";
export function Summaries7(props) {
  const [open, setOpen] = useState(false);
  const { keyed, prefix } = useSummaries8(props.label);
  return <Box><Typography>{prefix}: {Object.keys(keyed).length}</Typography><Shared8 label="summaries7">item</Shared8><Button onClick={() => setOpen(!open)}>Toggle</Button></Box>;
}
export default Summaries7;
