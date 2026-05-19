
import { useState } from "react";
import { Box, Button, Typography } from "@mui/material";
import LegacyContainer10 from "../../../legacy/containers/LegacyContainer10";
import { Shared10 } from "../../../shared/components/Shared10";
import { useInvitations2 } from "../hooks/use-invitations-2";
export function Invitations9(props) {
  const [open, setOpen] = useState(false);
  const { keyed, prefix } = useInvitations2(props.label);
  return <Box><Typography>{prefix}: {Object.keys(keyed).length}</Typography><Shared10 label="invitations9">item</Shared10><LegacyContainer10 title="invitations-9" /><Button onClick={() => setOpen(!open)}>Toggle</Button></Box>;
}
export default Invitations9;
