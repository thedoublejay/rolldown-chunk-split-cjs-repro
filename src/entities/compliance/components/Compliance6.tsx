
import { useState } from "react";
import { Box, Button, Typography } from "@mui/material";
import LegacyContainer7 from "../../../legacy/containers/LegacyContainer7";
import { Shared7 } from "../../../shared/components/Shared7";
import { useCompliance7 } from "../hooks/use-compliance-7";
export function Compliance6(props) {
  const [open, setOpen] = useState(false);
  const { keyed, prefix } = useCompliance7(props.label);
  return <Box><Typography>{prefix}: {Object.keys(keyed).length}</Typography><Shared7 label="compliance6">item</Shared7><LegacyContainer7 title="compliance-6" /><Button onClick={() => setOpen(!open)}>Toggle</Button></Box>;
}
export default Compliance6;
