
import { useState } from "react";
import { Box, Button, Typography } from "@mui/material";
import LegacyContainer13 from "../../../legacy/containers/LegacyContainer13";
import { Shared13 } from "../../../shared/components/Shared13";
import { useInvitations5 } from "../hooks/use-invitations-5";
export function Invitations12(props) {
  const [open, setOpen] = useState(false);
  const { keyed, prefix } = useInvitations5(props.label);
  return <Box><Typography>{prefix}: {Object.keys(keyed).length}</Typography><Shared13 label="invitations12">item</Shared13><LegacyContainer13 title="invitations-12" /><Button onClick={() => setOpen(!open)}>Toggle</Button></Box>;
}
export default Invitations12;
