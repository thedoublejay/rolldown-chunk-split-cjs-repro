
import { useState } from "react";
import { Box, Button, Typography } from "@mui/material";
import LegacyContainer4 from "../../../legacy/containers/LegacyContainer4";
import { Shared4 } from "../../../shared/components/Shared4";
import { useInvitations4 } from "../hooks/use-invitations-4";
export function Invitations3(props) {
  const [open, setOpen] = useState(false);
  const { keyed, prefix } = useInvitations4(props.label);
  return <Box><Typography>{prefix}: {Object.keys(keyed).length}</Typography><Shared4 label="invitations3">item</Shared4><LegacyContainer4 title="invitations-3" /><Button onClick={() => setOpen(!open)}>Toggle</Button></Box>;
}
export default Invitations3;
