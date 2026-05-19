
import { useState } from "react";
import { Box, Button, Typography } from "@mui/material";
import LegacyContainer7 from "../../../legacy/containers/LegacyContainer7";
import { Shared7 } from "../../../shared/components/Shared7";
import { useInvitations7 } from "../hooks/use-invitations-7";
export function Invitations6(props) {
  const [open, setOpen] = useState(false);
  const { keyed, prefix } = useInvitations7(props.label);
  return <Box><Typography>{prefix}: {Object.keys(keyed).length}</Typography><Shared7 label="invitations6">item</Shared7><LegacyContainer7 title="invitations-6" /><Button onClick={() => setOpen(!open)}>Toggle</Button></Box>;
}
export default Invitations6;
