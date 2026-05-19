
import { useState } from "react";
import { Box, Button, Typography } from "@mui/material";
import LegacyContainer10 from "../../../legacy/containers/LegacyContainer10";
import { Shared10 } from "../../../shared/components/Shared10";
import { useSummaries2 } from "../hooks/use-summaries-2";
export function Summaries9(props) {
  const [open, setOpen] = useState(false);
  const { keyed, prefix } = useSummaries2(props.label);
  return <Box><Typography>{prefix}: {Object.keys(keyed).length}</Typography><Shared10 label="summaries9">item</Shared10><LegacyContainer10 title="summaries-9" /><Button onClick={() => setOpen(!open)}>Toggle</Button></Box>;
}
export default Summaries9;
