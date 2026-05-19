
import { useState } from "react";
import { Box, Button, Typography } from "@mui/material";
import LegacyContainer4 from "../../../legacy/containers/LegacyContainer4";
import { Shared4 } from "../../../shared/components/Shared4";
import { useCompliance4 } from "../hooks/use-compliance-4";
export function Compliance3(props) {
  const [open, setOpen] = useState(false);
  const { keyed, prefix } = useCompliance4(props.label);
  return <Box><Typography>{prefix}: {Object.keys(keyed).length}</Typography><Shared4 label="compliance3">item</Shared4><LegacyContainer4 title="compliance-3" /><Button onClick={() => setOpen(!open)}>Toggle</Button></Box>;
}
export default Compliance3;
