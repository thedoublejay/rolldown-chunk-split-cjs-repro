
import { useState } from "react";
import { Box, Button, Typography } from "@mui/material";
import LegacyContainer10 from "../../../legacy/containers/LegacyContainer10";
import { Shared10 } from "../../../shared/components/Shared10";
import { useNotifications2 } from "../hooks/use-notifications-2";
export function Notifications9(props) {
  const [open, setOpen] = useState(false);
  const { keyed, prefix } = useNotifications2(props.label);
  return <Box><Typography>{prefix}: {Object.keys(keyed).length}</Typography><Shared10 label="notifications9">item</Shared10><LegacyContainer10 title="notifications-9" /><Button onClick={() => setOpen(!open)}>Toggle</Button></Box>;
}
export default Notifications9;
