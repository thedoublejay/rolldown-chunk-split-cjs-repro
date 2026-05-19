
import { useState } from "react";
import { Box, Button, Typography } from "@mui/material";

import { Shared6 } from "../../../shared/components/Shared6";
import { useNotifications6 } from "../hooks/use-notifications-6";
export function Notifications5(props) {
  const [open, setOpen] = useState(false);
  const { keyed, prefix } = useNotifications6(props.label);
  return <Box><Typography>{prefix}: {Object.keys(keyed).length}</Typography><Shared6 label="notifications5">item</Shared6><Button onClick={() => setOpen(!open)}>Toggle</Button></Box>;
}
export default Notifications5;
