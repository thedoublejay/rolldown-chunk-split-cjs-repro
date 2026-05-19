
import { useState } from "react";
import { Box, Button, Typography } from "@mui/material";
import LegacyContainer13 from "../../../legacy/containers/LegacyContainer13";
import { Shared13 } from "../../../shared/components/Shared13";
import { useMetrics5 } from "../hooks/use-metrics-5";
export function Metrics12(props) {
  const [open, setOpen] = useState(false);
  const { keyed, prefix } = useMetrics5(props.label);
  return <Box><Typography>{prefix}: {Object.keys(keyed).length}</Typography><Shared13 label="metrics12">item</Shared13><LegacyContainer13 title="metrics-12" /><Button onClick={() => setOpen(!open)}>Toggle</Button></Box>;
}
export default Metrics12;
