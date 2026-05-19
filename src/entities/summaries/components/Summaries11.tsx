
import { useState } from "react";
import { Box, Button, Typography } from "@mui/material";

import { Shared12 } from "../../../shared/components/Shared12";
import { useSummaries4 } from "../hooks/use-summaries-4";
export function Summaries11(props) {
  const [open, setOpen] = useState(false);
  const { keyed, prefix } = useSummaries4(props.label);
  return <Box><Typography>{prefix}: {Object.keys(keyed).length}</Typography><Shared12 label="summaries11">item</Shared12><Button onClick={() => setOpen(!open)}>Toggle</Button></Box>;
}
export default Summaries11;
