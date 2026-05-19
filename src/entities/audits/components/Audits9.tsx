
import { useState } from "react";
import { Box, Button, Typography } from "@mui/material";
import LegacyContainer10 from "../../../legacy/containers/LegacyContainer10";
import { Shared10 } from "../../../shared/components/Shared10";
import { useAudits2 } from "../hooks/use-audits-2";
export function Audits9(props) {
  const [open, setOpen] = useState(false);
  const { keyed, prefix } = useAudits2(props.label);
  return <Box><Typography>{prefix}: {Object.keys(keyed).length}</Typography><Shared10 label="audits9">item</Shared10><LegacyContainer10 title="audits-9" /><Button onClick={() => setOpen(!open)}>Toggle</Button></Box>;
}
export default Audits9;
