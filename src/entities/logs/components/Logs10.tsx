
import { useState } from "react";
import { Box, Button, Typography } from "@mui/material";

import { Shared11 } from "../../../shared/components/Shared11";
import { useLogs3 } from "../hooks/use-logs-3";
export function Logs10(props) {
  const [open, setOpen] = useState(false);
  const { keyed, prefix } = useLogs3(props.label);
  return <Box><Typography>{prefix}: {Object.keys(keyed).length}</Typography><Shared11 label="logs10">item</Shared11><Button onClick={() => setOpen(!open)}>Toggle</Button></Box>;
}
export default Logs10;
