
import { useState } from "react";
import { Box, Button, Typography } from "@mui/material";

import { Shared11 } from "../../../shared/components/Shared11";
import { useNotifications3 } from "../hooks/use-notifications-3";
export function Notifications10(props) {
  const [open, setOpen] = useState(false);
  const { keyed, prefix } = useNotifications3(props.label);
  return <Box><Typography>{prefix}: {Object.keys(keyed).length}</Typography><Shared11 label="notifications10">item</Shared11><Button onClick={() => setOpen(!open)}>Toggle</Button></Box>;
}
export default Notifications10;
