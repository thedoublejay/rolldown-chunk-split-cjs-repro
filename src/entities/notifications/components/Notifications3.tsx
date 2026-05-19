
import { useState } from "react";
import { Box, Button, Typography } from "@mui/material";
import LegacyContainer4 from "../../../legacy/containers/LegacyContainer4";
import { Shared4 } from "../../../shared/components/Shared4";
import { useNotifications4 } from "../hooks/use-notifications-4";
export function Notifications3(props) {
  const [open, setOpen] = useState(false);
  const { keyed, prefix } = useNotifications4(props.label);
  return <Box><Typography>{prefix}: {Object.keys(keyed).length}</Typography><Shared4 label="notifications3">item</Shared4><LegacyContainer4 title="notifications-3" /><Button onClick={() => setOpen(!open)}>Toggle</Button></Box>;
}
export default Notifications3;
