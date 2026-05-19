
import { useState } from "react";
import { Box, Button, Typography } from "@mui/material";
import LegacyContainer10 from "../../../legacy/containers/LegacyContainer10";
import { Shared10 } from "../../../shared/components/Shared10";
import { useApprovals2 } from "../hooks/use-approvals-2";
export function Approvals9(props) {
  const [open, setOpen] = useState(false);
  const { keyed, prefix } = useApprovals2(props.label);
  return <Box><Typography>{prefix}: {Object.keys(keyed).length}</Typography><Shared10 label="approvals9">item</Shared10><LegacyContainer10 title="approvals-9" /><Button onClick={() => setOpen(!open)}>Toggle</Button></Box>;
}
export default Approvals9;
