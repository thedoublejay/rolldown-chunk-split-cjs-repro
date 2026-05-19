
import { useState } from "react";
import { Box, Button, Typography } from "@mui/material";
import LegacyContainer4 from "../../../legacy/containers/LegacyContainer4";
import { Shared4 } from "../../../shared/components/Shared4";
import { useMetrics4 } from "../hooks/use-metrics-4";
export function Metrics3(props) {
  const [open, setOpen] = useState(false);
  const { keyed, prefix } = useMetrics4(props.label);
  return <Box><Typography>{prefix}: {Object.keys(keyed).length}</Typography><Shared4 label="metrics3">item</Shared4><LegacyContainer4 title="metrics-3" /><Button onClick={() => setOpen(!open)}>Toggle</Button></Box>;
}
export default Metrics3;
