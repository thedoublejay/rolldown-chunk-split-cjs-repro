
import { useState } from "react";
import { Box, Button, Typography } from "@mui/material";

import { Shared9 } from "../../../shared/components/Shared9";
import { useAudits1 } from "../hooks/use-audits-1";
export function Audits8(props) {
  const [open, setOpen] = useState(false);
  const { keyed, prefix } = useAudits1(props.label);
  return <Box><Typography>{prefix}: {Object.keys(keyed).length}</Typography><Shared9 label="audits8">item</Shared9><Button onClick={() => setOpen(!open)}>Toggle</Button></Box>;
}
export default Audits8;
