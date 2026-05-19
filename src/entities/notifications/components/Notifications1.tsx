
import { useState } from "react";
import { Box, Button, Typography } from "@mui/material";

import { Shared2 } from "../../../shared/components/Shared2";
import { useNotifications2 } from "../hooks/use-notifications-2";
export function Notifications1(props) {
  const [open, setOpen] = useState(false);
  const { keyed, prefix } = useNotifications2(props.label);
  return <Box><Typography>{prefix}: {Object.keys(keyed).length}</Typography><Shared2 label="notifications1">item</Shared2><Button onClick={() => setOpen(!open)}>Toggle</Button></Box>;
}
export default Notifications1;
