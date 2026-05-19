
import { useState } from "react";
import { Box, Button, Typography } from "@mui/material";

import { Shared2 } from "../../../shared/components/Shared2";
import { useSummaries2 } from "../hooks/use-summaries-2";
export function Summaries1(props) {
  const [open, setOpen] = useState(false);
  const { keyed, prefix } = useSummaries2(props.label);
  return <Box><Typography>{prefix}: {Object.keys(keyed).length}</Typography><Shared2 label="summaries1">item</Shared2><Button onClick={() => setOpen(!open)}>Toggle</Button></Box>;
}
export default Summaries1;
