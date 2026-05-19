
import { useState } from "react";
import { Box, Button, Typography } from "@mui/material";
import LegacyContainer7 from "../../../legacy/containers/LegacyContainer7";
import { Shared7 } from "../../../shared/components/Shared7";
import { useMetrics7 } from "../hooks/use-metrics-7";
export function Metrics6(props) {
  const [open, setOpen] = useState(false);
  const { keyed, prefix } = useMetrics7(props.label);
  return <Box><Typography>{prefix}: {Object.keys(keyed).length}</Typography><Shared7 label="metrics6">item</Shared7><LegacyContainer7 title="metrics-6" /><Button onClick={() => setOpen(!open)}>Toggle</Button></Box>;
}
export default Metrics6;
