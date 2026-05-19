
import { useState } from "react";
import { Box, Button, Typography } from "@mui/material";

import { Shared12 } from "../../../shared/components/Shared12";
import { useApprovals4 } from "../hooks/use-approvals-4";
export function Approvals11(props) {
  const [open, setOpen] = useState(false);
  const { keyed, prefix } = useApprovals4(props.label);
  return <Box><Typography>{prefix}: {Object.keys(keyed).length}</Typography><Shared12 label="approvals11">item</Shared12><Button onClick={() => setOpen(!open)}>Toggle</Button></Box>;
}
export default Approvals11;
