
import { useState } from "react";
import { Box, Button, Typography } from "@mui/material";

import { Shared5 } from "../../../shared/components/Shared5";
import { useInvitations5 } from "../hooks/use-invitations-5";
export function Invitations4(props) {
  const [open, setOpen] = useState(false);
  const { keyed, prefix } = useInvitations5(props.label);
  return <Box><Typography>{prefix}: {Object.keys(keyed).length}</Typography><Shared5 label="invitations4">item</Shared5><Button onClick={() => setOpen(!open)}>Toggle</Button></Box>;
}
export default Invitations4;
