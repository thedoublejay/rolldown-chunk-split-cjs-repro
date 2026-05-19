
import { useState } from "react";
import { Box, Button, Typography } from "@mui/material";
import LegacyContainer4 from "../../../legacy/containers/LegacyContainer4";
import { Shared4 } from "../../../shared/components/Shared4";
import { useSummaries4 } from "../hooks/use-summaries-4";
export function Summaries3(props) {
  const [open, setOpen] = useState(false);
  const { keyed, prefix } = useSummaries4(props.label);
  return <Box><Typography>{prefix}: {Object.keys(keyed).length}</Typography><Shared4 label="summaries3">item</Shared4><LegacyContainer4 title="summaries-3" /><Button onClick={() => setOpen(!open)}>Toggle</Button></Box>;
}
export default Summaries3;
