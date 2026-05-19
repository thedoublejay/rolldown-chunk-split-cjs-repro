
import { useState } from "react";
import { Box, Button, Typography } from "@mui/material";

import { Shared2 } from "../../../shared/components/Shared2";
import { useInvitations2 } from "../hooks/use-invitations-2";
export function Invitations1(props) {
  const [open, setOpen] = useState(false);
  const { keyed, prefix } = useInvitations2(props.label);
  return <Box><Typography>{prefix}: {Object.keys(keyed).length}</Typography><Shared2 label="invitations1">item</Shared2><Button onClick={() => setOpen(!open)}>Toggle</Button></Box>;
}
export default Invitations1;
