
import { useState } from "react";
import { Box, Button, Typography } from "@mui/material";

import { Shared9 } from "../../../shared/components/Shared9";
import { useInvitations1 } from "../hooks/use-invitations-1";
export function Invitations8(props) {
  const [open, setOpen] = useState(false);
  const { keyed, prefix } = useInvitations1(props.label);
  return <Box><Typography>{prefix}: {Object.keys(keyed).length}</Typography><Shared9 label="invitations8">item</Shared9><Button onClick={() => setOpen(!open)}>Toggle</Button></Box>;
}
export default Invitations8;
