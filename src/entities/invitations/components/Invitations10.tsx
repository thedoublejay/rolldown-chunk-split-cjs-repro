
import { useState } from "react";
import { Box, Button, Typography } from "@mui/material";

import { Shared11 } from "../../../shared/components/Shared11";
import { useInvitations3 } from "../hooks/use-invitations-3";
export function Invitations10(props) {
  const [open, setOpen] = useState(false);
  const { keyed, prefix } = useInvitations3(props.label);
  return <Box><Typography>{prefix}: {Object.keys(keyed).length}</Typography><Shared11 label="invitations10">item</Shared11><Button onClick={() => setOpen(!open)}>Toggle</Button></Box>;
}
export default Invitations10;
