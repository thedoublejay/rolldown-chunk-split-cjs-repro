
import { useState } from "react";
import { Box, Button, Typography } from "@mui/material";

import { Shared11 } from "../../../shared/components/Shared11";
import { useCompliance3 } from "../hooks/use-compliance-3";
export function Compliance10(props) {
  const [open, setOpen] = useState(false);
  const { keyed, prefix } = useCompliance3(props.label);
  return <Box><Typography>{prefix}: {Object.keys(keyed).length}</Typography><Shared11 label="compliance10">item</Shared11><Button onClick={() => setOpen(!open)}>Toggle</Button></Box>;
}
export default Compliance10;
