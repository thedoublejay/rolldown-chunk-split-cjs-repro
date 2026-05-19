
import { useState } from "react";
import { Box, Button, Typography } from "@mui/material";

import { Shared11 } from "../../../shared/components/Shared11";
import { useApprovals3 } from "../hooks/use-approvals-3";
export function Approvals10(props) {
  const [open, setOpen] = useState(false);
  const { keyed, prefix } = useApprovals3(props.label);
  return <Box><Typography>{prefix}: {Object.keys(keyed).length}</Typography><Shared11 label="approvals10">item</Shared11><Button onClick={() => setOpen(!open)}>Toggle</Button></Box>;
}
export default Approvals10;
