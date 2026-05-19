
import { useState } from "react";
import { Box, Button, Typography } from "@mui/material";
import LegacyContainer13 from "../../../legacy/containers/LegacyContainer13";
import { Shared13 } from "../../../shared/components/Shared13";
import { useCompliance5 } from "../hooks/use-compliance-5";
export function Compliance12(props) {
  const [open, setOpen] = useState(false);
  const { keyed, prefix } = useCompliance5(props.label);
  return <Box><Typography>{prefix}: {Object.keys(keyed).length}</Typography><Shared13 label="compliance12">item</Shared13><LegacyContainer13 title="compliance-12" /><Button onClick={() => setOpen(!open)}>Toggle</Button></Box>;
}
export default Compliance12;
