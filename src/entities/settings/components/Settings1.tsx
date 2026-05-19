
import { useState } from "react";
import { Box, Button, Typography } from "@mui/material";

import { Shared2 } from "../../../shared/components/Shared2";
import { useSettings2 } from "../hooks/use-settings-2";
export function Settings1(props) {
  const [open, setOpen] = useState(false);
  const { keyed, prefix } = useSettings2(props.label);
  return <Box><Typography>{prefix}: {Object.keys(keyed).length}</Typography><Shared2 label="settings1">item</Shared2><Button onClick={() => setOpen(!open)}>Toggle</Button></Box>;
}
export default Settings1;
