
import { useState } from "react";
import { Box, Button, Typography } from "@mui/material";
import LegacyContainer13 from "../../../legacy/containers/LegacyContainer13";
import { Shared13 } from "../../../shared/components/Shared13";
import { useNotifications5 } from "../hooks/use-notifications-5";
export function Notifications12(props) {
  const [open, setOpen] = useState(false);
  const { keyed, prefix } = useNotifications5(props.label);
  return <Box><Typography>{prefix}: {Object.keys(keyed).length}</Typography><Shared13 label="notifications12">item</Shared13><LegacyContainer13 title="notifications-12" /><Button onClick={() => setOpen(!open)}>Toggle</Button></Box>;
}
export default Notifications12;
