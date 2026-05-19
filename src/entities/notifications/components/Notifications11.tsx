
import { useState } from "react";
import { Box, Button, Typography } from "@mui/material";

import { Shared12 } from "../../../shared/components/Shared12";
import { useNotifications4 } from "../hooks/use-notifications-4";
export function Notifications11(props) {
  const [open, setOpen] = useState(false);
  const { keyed, prefix } = useNotifications4(props.label);
  return <Box><Typography>{prefix}: {Object.keys(keyed).length}</Typography><Shared12 label="notifications11">item</Shared12><Button onClick={() => setOpen(!open)}>Toggle</Button></Box>;
}
export default Notifications11;
