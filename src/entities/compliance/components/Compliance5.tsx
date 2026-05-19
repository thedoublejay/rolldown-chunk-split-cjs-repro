
import { useState } from "react";
import { Box, Button, Typography } from "@mui/material";

import { Shared6 } from "../../../shared/components/Shared6";
import { useCompliance6 } from "../hooks/use-compliance-6";
export function Compliance5(props) {
  const [open, setOpen] = useState(false);
  const { keyed, prefix } = useCompliance6(props.label);
  return <Box><Typography>{prefix}: {Object.keys(keyed).length}</Typography><Shared6 label="compliance5">item</Shared6><Button onClick={() => setOpen(!open)}>Toggle</Button></Box>;
}
export default Compliance5;
