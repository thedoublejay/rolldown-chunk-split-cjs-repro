
import { useState } from "react";
import { Box, Button, Typography } from "@mui/material";
import LegacyContainer7 from "../../../legacy/containers/LegacyContainer7";
import { Shared7 } from "../../../shared/components/Shared7";
import { useNotifications7 } from "../hooks/use-notifications-7";
export function Notifications6(props) {
  const [open, setOpen] = useState(false);
  const { keyed, prefix } = useNotifications7(props.label);
  return <Box><Typography>{prefix}: {Object.keys(keyed).length}</Typography><Shared7 label="notifications6">item</Shared7><LegacyContainer7 title="notifications-6" /><Button onClick={() => setOpen(!open)}>Toggle</Button></Box>;
}
export default Notifications6;
