
import { useState } from "react";
import { Box, Button, Typography } from "@mui/material";

import { Shared3 } from "../../../shared/components/Shared3";
import { useApprovals3 } from "../hooks/use-approvals-3";
export function Approvals2(props) {
  const [open, setOpen] = useState(false);
  const { keyed, prefix } = useApprovals3(props.label);
  return <Box><Typography>{prefix}: {Object.keys(keyed).length}</Typography><Shared3 label="approvals2">item</Shared3><Button onClick={() => setOpen(!open)}>Toggle</Button></Box>;
}
export default Approvals2;
