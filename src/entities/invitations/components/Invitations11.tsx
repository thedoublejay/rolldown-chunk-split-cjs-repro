
import { useState } from "react";
import { Box, Button, Typography } from "@mui/material";

import { Shared12 } from "../../../shared/components/Shared12";
import { useInvitations4 } from "../hooks/use-invitations-4";
export function Invitations11(props) {
  const [open, setOpen] = useState(false);
  const { keyed, prefix } = useInvitations4(props.label);
  return <Box><Typography>{prefix}: {Object.keys(keyed).length}</Typography><Shared12 label="invitations11">item</Shared12><Button onClick={() => setOpen(!open)}>Toggle</Button></Box>;
}
export default Invitations11;
