
import { useState } from "react";
import { Box, Button, Typography } from "@mui/material";
import LegacyContainer4 from "../../../legacy/containers/LegacyContainer4";
import { Shared4 } from "../../../shared/components/Shared4";
import { useApprovals4 } from "../hooks/use-approvals-4";
export function Approvals3(props) {
  const [open, setOpen] = useState(false);
  const { keyed, prefix } = useApprovals4(props.label);
  return <Box><Typography>{prefix}: {Object.keys(keyed).length}</Typography><Shared4 label="approvals3">item</Shared4><LegacyContainer4 title="approvals-3" /><Button onClick={() => setOpen(!open)}>Toggle</Button></Box>;
}
export default Approvals3;
