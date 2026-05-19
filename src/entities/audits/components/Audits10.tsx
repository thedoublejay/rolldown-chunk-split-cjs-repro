
import { useState } from "react";
import { Box, Button, Typography } from "@mui/material";

import { Shared11 } from "../../../shared/components/Shared11";
import { useAudits3 } from "../hooks/use-audits-3";
export function Audits10(props) {
  const [open, setOpen] = useState(false);
  const { keyed, prefix } = useAudits3(props.label);
  return <Box><Typography>{prefix}: {Object.keys(keyed).length}</Typography><Shared11 label="audits10">item</Shared11><Button onClick={() => setOpen(!open)}>Toggle</Button></Box>;
}
export default Audits10;
