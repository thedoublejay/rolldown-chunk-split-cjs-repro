
import { useState } from "react";
import { Box, Button, Typography } from "@mui/material";

import { Shared6 } from "../../../shared/components/Shared6";
import { useAudits6 } from "../hooks/use-audits-6";
export function Audits5(props) {
  const [open, setOpen] = useState(false);
  const { keyed, prefix } = useAudits6(props.label);
  return <Box><Typography>{prefix}: {Object.keys(keyed).length}</Typography><Shared6 label="audits5">item</Shared6><Button onClick={() => setOpen(!open)}>Toggle</Button></Box>;
}
export default Audits5;
