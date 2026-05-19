
import { useState } from "react";
import { Box, Button, Typography } from "@mui/material";

import { Shared6 } from "../../../shared/components/Shared6";
import { useInvitations6 } from "../hooks/use-invitations-6";
export function Invitations5(props) {
  const [open, setOpen] = useState(false);
  const { keyed, prefix } = useInvitations6(props.label);
  return <Box><Typography>{prefix}: {Object.keys(keyed).length}</Typography><Shared6 label="invitations5">item</Shared6><Button onClick={() => setOpen(!open)}>Toggle</Button></Box>;
}
export default Invitations5;
