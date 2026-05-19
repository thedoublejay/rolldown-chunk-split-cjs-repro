
import { useState } from "react";
import { Box, Button, Typography } from "@mui/material";

import { Shared12 } from "../../../shared/components/Shared12";
import { useAudits4 } from "../hooks/use-audits-4";
export function Audits11(props) {
  const [open, setOpen] = useState(false);
  const { keyed, prefix } = useAudits4(props.label);
  return <Box><Typography>{prefix}: {Object.keys(keyed).length}</Typography><Shared12 label="audits11">item</Shared12><Button onClick={() => setOpen(!open)}>Toggle</Button></Box>;
}
export default Audits11;
