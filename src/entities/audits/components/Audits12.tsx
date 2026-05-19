
import { useState } from "react";
import { Box, Button, Typography } from "@mui/material";
import LegacyContainer13 from "../../../legacy/containers/LegacyContainer13";
import { Shared13 } from "../../../shared/components/Shared13";
import { useAudits5 } from "../hooks/use-audits-5";
export function Audits12(props) {
  const [open, setOpen] = useState(false);
  const { keyed, prefix } = useAudits5(props.label);
  return <Box><Typography>{prefix}: {Object.keys(keyed).length}</Typography><Shared13 label="audits12">item</Shared13><LegacyContainer13 title="audits-12" /><Button onClick={() => setOpen(!open)}>Toggle</Button></Box>;
}
export default Audits12;
