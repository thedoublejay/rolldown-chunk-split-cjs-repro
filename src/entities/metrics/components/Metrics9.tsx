
import { useState } from "react";
import { Box, Button, Typography } from "@mui/material";
import LegacyContainer10 from "../../../legacy/containers/LegacyContainer10";
import { Shared10 } from "../../../shared/components/Shared10";
import { useMetrics2 } from "../hooks/use-metrics-2";
export function Metrics9(props) {
  const [open, setOpen] = useState(false);
  const { keyed, prefix } = useMetrics2(props.label);
  return <Box><Typography>{prefix}: {Object.keys(keyed).length}</Typography><Shared10 label="metrics9">item</Shared10><LegacyContainer10 title="metrics-9" /><Button onClick={() => setOpen(!open)}>Toggle</Button></Box>;
}
export default Metrics9;
