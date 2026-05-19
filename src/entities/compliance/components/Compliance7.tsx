
import { useState } from "react";
import { Box, Button, Typography } from "@mui/material";

import { Shared8 } from "../../../shared/components/Shared8";
import { useCompliance8 } from "../hooks/use-compliance-8";
export function Compliance7(props) {
  const [open, setOpen] = useState(false);
  const { keyed, prefix } = useCompliance8(props.label);
  return <Box><Typography>{prefix}: {Object.keys(keyed).length}</Typography><Shared8 label="compliance7">item</Shared8><Button onClick={() => setOpen(!open)}>Toggle</Button></Box>;
}
export default Compliance7;
