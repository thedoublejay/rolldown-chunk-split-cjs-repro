
import { useState } from "react";
import { Box, Button, Typography } from "@mui/material";

import { Shared6 } from "../../../shared/components/Shared6";
import { useApprovals6 } from "../hooks/use-approvals-6";
export function Approvals5(props) {
  const [open, setOpen] = useState(false);
  const { keyed, prefix } = useApprovals6(props.label);
  return <Box><Typography>{prefix}: {Object.keys(keyed).length}</Typography><Shared6 label="approvals5">item</Shared6><Button onClick={() => setOpen(!open)}>Toggle</Button></Box>;
}
export default Approvals5;
