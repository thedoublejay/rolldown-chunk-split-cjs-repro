
import { useState } from "react";
import { Box, Button, Typography } from "@mui/material";
import LegacyContainer13 from "../../../legacy/containers/LegacyContainer13";
import { Shared13 } from "../../../shared/components/Shared13";
import { useApprovals5 } from "../hooks/use-approvals-5";
export function Approvals12(props) {
  const [open, setOpen] = useState(false);
  const { keyed, prefix } = useApprovals5(props.label);
  return <Box><Typography>{prefix}: {Object.keys(keyed).length}</Typography><Shared13 label="approvals12">item</Shared13><LegacyContainer13 title="approvals-12" /><Button onClick={() => setOpen(!open)}>Toggle</Button></Box>;
}
export default Approvals12;
