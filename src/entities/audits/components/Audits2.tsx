
import { useState } from "react";
import { Box, Button, Typography } from "@mui/material";

import { Shared3 } from "../../../shared/components/Shared3";
import { useAudits3 } from "../hooks/use-audits-3";
export function Audits2(props) {
  const [open, setOpen] = useState(false);
  const { keyed, prefix } = useAudits3(props.label);
  return <Box><Typography>{prefix}: {Object.keys(keyed).length}</Typography><Shared3 label="audits2">item</Shared3><Button onClick={() => setOpen(!open)}>Toggle</Button></Box>;
}
export default Audits2;
