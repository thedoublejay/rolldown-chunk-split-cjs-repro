
import { useState } from "react";
import { Box, Button, Typography } from "@mui/material";
import LegacyContainer4 from "../../../legacy/containers/LegacyContainer4";
import { Shared4 } from "../../../shared/components/Shared4";
import { useAnalytics4 } from "../hooks/use-analytics-4";
export function Analytics3(props) {
  const [open, setOpen] = useState(false);
  const { keyed, prefix } = useAnalytics4(props.label);
  return <Box><Typography>{prefix}: {Object.keys(keyed).length}</Typography><Shared4 label="analytics3">item</Shared4><LegacyContainer4 title="analytics-3" /><Button onClick={() => setOpen(!open)}>Toggle</Button></Box>;
}
export default Analytics3;
