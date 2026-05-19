
import { useState } from "react";
import { Box, Button, Typography } from "@mui/material";

import { Shared5 } from "../../../shared/components/Shared5";
import { useAudits5 } from "../hooks/use-audits-5";
export function Audits4(props) {
  const [open, setOpen] = useState(false);
  const { keyed, prefix } = useAudits5(props.label);
  return <Box><Typography>{prefix}: {Object.keys(keyed).length}</Typography><Shared5 label="audits4">item</Shared5><Button onClick={() => setOpen(!open)}>Toggle</Button></Box>;
}
export default Audits4;
