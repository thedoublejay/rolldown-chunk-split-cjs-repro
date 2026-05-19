
import { useState } from "react";
import { Box, Button, Typography } from "@mui/material";

import { Shared5 } from "../../../shared/components/Shared5";
import { useCompliance5 } from "../hooks/use-compliance-5";
export function Compliance4(props) {
  const [open, setOpen] = useState(false);
  const { keyed, prefix } = useCompliance5(props.label);
  return <Box><Typography>{prefix}: {Object.keys(keyed).length}</Typography><Shared5 label="compliance4">item</Shared5><Button onClick={() => setOpen(!open)}>Toggle</Button></Box>;
}
export default Compliance4;
