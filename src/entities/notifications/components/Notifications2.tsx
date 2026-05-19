
import { useState } from "react";
import { Box, Button, Typography } from "@mui/material";

import { Shared3 } from "../../../shared/components/Shared3";
import { useNotifications3 } from "../hooks/use-notifications-3";
export function Notifications2(props) {
  const [open, setOpen] = useState(false);
  const { keyed, prefix } = useNotifications3(props.label);
  return <Box><Typography>{prefix}: {Object.keys(keyed).length}</Typography><Shared3 label="notifications2">item</Shared3><Button onClick={() => setOpen(!open)}>Toggle</Button></Box>;
}
export default Notifications2;
