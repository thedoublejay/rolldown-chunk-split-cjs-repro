
import { useState } from "react";
import { Box, Button, Typography } from "@mui/material";

import { Shared5 } from "../../../shared/components/Shared5";
import { useSettings5 } from "../hooks/use-settings-5";
export function Settings4(props) {
  const [open, setOpen] = useState(false);
  const { keyed, prefix } = useSettings5(props.label);
  return <Box><Typography>{prefix}: {Object.keys(keyed).length}</Typography><Shared5 label="settings4">item</Shared5><Button onClick={() => setOpen(!open)}>Toggle</Button></Box>;
}
export default Settings4;
