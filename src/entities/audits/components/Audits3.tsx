
import { useState } from "react";
import { Box, Button, Typography } from "@mui/material";
import LegacyContainer4 from "../../../legacy/containers/LegacyContainer4";
import { Shared4 } from "../../../shared/components/Shared4";
import { useAudits4 } from "../hooks/use-audits-4";
export function Audits3(props) {
  const [open, setOpen] = useState(false);
  const { keyed, prefix } = useAudits4(props.label);
  return <Box><Typography>{prefix}: {Object.keys(keyed).length}</Typography><Shared4 label="audits3">item</Shared4><LegacyContainer4 title="audits-3" /><Button onClick={() => setOpen(!open)}>Toggle</Button></Box>;
}
export default Audits3;
