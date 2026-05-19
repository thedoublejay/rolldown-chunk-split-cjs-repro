
import { useState } from "react";
import { Box, Button, Typography } from "@mui/material";
import LegacyContainer13 from "../../../legacy/containers/LegacyContainer13";
import { Shared13 } from "../../../shared/components/Shared13";
import { useAnalytics5 } from "../hooks/use-analytics-5";
export function Analytics12(props) {
  const [open, setOpen] = useState(false);
  const { keyed, prefix } = useAnalytics5(props.label);
  return <Box><Typography>{prefix}: {Object.keys(keyed).length}</Typography><Shared13 label="analytics12">item</Shared13><LegacyContainer13 title="analytics-12" /><Button onClick={() => setOpen(!open)}>Toggle</Button></Box>;
}
export default Analytics12;
