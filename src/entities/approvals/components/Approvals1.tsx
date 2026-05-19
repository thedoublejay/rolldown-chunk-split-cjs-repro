
import { useState } from "react";
import { Box, Button, Typography } from "@mui/material";

import { Shared2 } from "../../../shared/components/Shared2";
import { useApprovals2 } from "../hooks/use-approvals-2";
export function Approvals1(props) {
  const [open, setOpen] = useState(false);
  const { keyed, prefix } = useApprovals2(props.label);
  return <Box><Typography>{prefix}: {Object.keys(keyed).length}</Typography><Shared2 label="approvals1">item</Shared2><Button onClick={() => setOpen(!open)}>Toggle</Button></Box>;
}
export default Approvals1;
