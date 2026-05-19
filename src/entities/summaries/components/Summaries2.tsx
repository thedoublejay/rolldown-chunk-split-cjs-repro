
import { useState } from "react";
import { Box, Button, Typography } from "@mui/material";

import { Shared3 } from "../../../shared/components/Shared3";
import { useSummaries3 } from "../hooks/use-summaries-3";
export function Summaries2(props) {
  const [open, setOpen] = useState(false);
  const { keyed, prefix } = useSummaries3(props.label);
  return <Box><Typography>{prefix}: {Object.keys(keyed).length}</Typography><Shared3 label="summaries2">item</Shared3><Button onClick={() => setOpen(!open)}>Toggle</Button></Box>;
}
export default Summaries2;
