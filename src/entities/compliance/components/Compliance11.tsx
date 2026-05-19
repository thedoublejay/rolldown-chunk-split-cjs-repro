
import { useState } from "react";
import { Box, Button, Typography } from "@mui/material";

import { Shared12 } from "../../../shared/components/Shared12";
import { useCompliance4 } from "../hooks/use-compliance-4";
export function Compliance11(props) {
  const [open, setOpen] = useState(false);
  const { keyed, prefix } = useCompliance4(props.label);
  return <Box><Typography>{prefix}: {Object.keys(keyed).length}</Typography><Shared12 label="compliance11">item</Shared12><Button onClick={() => setOpen(!open)}>Toggle</Button></Box>;
}
export default Compliance11;
