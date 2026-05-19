
import { useState } from "react";
import { Box, Button, Typography } from "@mui/material";

import { Shared8 } from "../../../shared/components/Shared8";
import { useInvitations8 } from "../hooks/use-invitations-8";
export function Invitations7(props) {
  const [open, setOpen] = useState(false);
  const { keyed, prefix } = useInvitations8(props.label);
  return <Box><Typography>{prefix}: {Object.keys(keyed).length}</Typography><Shared8 label="invitations7">item</Shared8><Button onClick={() => setOpen(!open)}>Toggle</Button></Box>;
}
export default Invitations7;
