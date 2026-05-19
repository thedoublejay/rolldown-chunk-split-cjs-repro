
import { useState } from "react";
import { Box, Button, Typography } from "@mui/material";

import { Shared2 } from "../../../shared/components/Shared2";
import { useAudits2 } from "../hooks/use-audits-2";
export function Audits1(props) {
  const [open, setOpen] = useState(false);
  const { keyed, prefix } = useAudits2(props.label);
  return <Box><Typography>{prefix}: {Object.keys(keyed).length}</Typography><Shared2 label="audits1">item</Shared2><Button onClick={() => setOpen(!open)}>Toggle</Button></Box>;
}
export default Audits1;
