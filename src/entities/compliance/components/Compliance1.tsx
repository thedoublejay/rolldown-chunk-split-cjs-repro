
import { useState } from "react";
import { Box, Button, Typography } from "@mui/material";

import { Shared2 } from "../../../shared/components/Shared2";
import { useCompliance2 } from "../hooks/use-compliance-2";
export function Compliance1(props) {
  const [open, setOpen] = useState(false);
  const { keyed, prefix } = useCompliance2(props.label);
  return <Box><Typography>{prefix}: {Object.keys(keyed).length}</Typography><Shared2 label="compliance1">item</Shared2><Button onClick={() => setOpen(!open)}>Toggle</Button></Box>;
}
export default Compliance1;
