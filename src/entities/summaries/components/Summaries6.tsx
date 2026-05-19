
import { useState } from "react";
import { Box, Button, Typography } from "@mui/material";
import LegacyContainer7 from "../../../legacy/containers/LegacyContainer7";
import { Shared7 } from "../../../shared/components/Shared7";
import { useSummaries7 } from "../hooks/use-summaries-7";
export function Summaries6(props) {
  const [open, setOpen] = useState(false);
  const { keyed, prefix } = useSummaries7(props.label);
  return <Box><Typography>{prefix}: {Object.keys(keyed).length}</Typography><Shared7 label="summaries6">item</Shared7><LegacyContainer7 title="summaries-6" /><Button onClick={() => setOpen(!open)}>Toggle</Button></Box>;
}
export default Summaries6;
