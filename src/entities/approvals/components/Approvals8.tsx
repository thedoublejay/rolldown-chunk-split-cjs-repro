
import { useState } from "react";
import { Box, Button, Typography } from "@mui/material";

import { Shared9 } from "../../../shared/components/Shared9";
import { useApprovals1 } from "../hooks/use-approvals-1";
export function Approvals8(props) {
  const [open, setOpen] = useState(false);
  const { keyed, prefix } = useApprovals1(props.label);
  return <Box><Typography>{prefix}: {Object.keys(keyed).length}</Typography><Shared9 label="approvals8">item</Shared9><Button onClick={() => setOpen(!open)}>Toggle</Button></Box>;
}
export default Approvals8;
