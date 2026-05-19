
import { useState } from "react";
import { Box, Button, Typography } from "@mui/material";
import LegacyContainer7 from "../../../legacy/containers/LegacyContainer7";
import { Shared7 } from "../../../shared/components/Shared7";
import { useAnalytics7 } from "../hooks/use-analytics-7";
export function Analytics6(props) {
  const [open, setOpen] = useState(false);
  const { keyed, prefix } = useAnalytics7(props.label);
  return <Box><Typography>{prefix}: {Object.keys(keyed).length}</Typography><Shared7 label="analytics6">item</Shared7><LegacyContainer7 title="analytics-6" /><Button onClick={() => setOpen(!open)}>Toggle</Button></Box>;
}
export default Analytics6;
