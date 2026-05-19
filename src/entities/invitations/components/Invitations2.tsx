
import { useState } from "react";
import { Box, Button, Typography } from "@mui/material";

import { Shared3 } from "../../../shared/components/Shared3";
import { useInvitations3 } from "../hooks/use-invitations-3";
export function Invitations2(props) {
  const [open, setOpen] = useState(false);
  const { keyed, prefix } = useInvitations3(props.label);
  return <Box><Typography>{prefix}: {Object.keys(keyed).length}</Typography><Shared3 label="invitations2">item</Shared3><Button onClick={() => setOpen(!open)}>Toggle</Button></Box>;
}
export default Invitations2;
