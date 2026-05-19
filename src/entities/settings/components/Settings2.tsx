
import { useState } from "react";
import { Box, Button, Typography } from "@mui/material";

import { Shared3 } from "../../../shared/components/Shared3";
import { useSettings3 } from "../hooks/use-settings-3";
export function Settings2(props) {
  const [open, setOpen] = useState(false);
  const { keyed, prefix } = useSettings3(props.label);
  return <Box><Typography>{prefix}: {Object.keys(keyed).length}</Typography><Shared3 label="settings2">item</Shared3><Button onClick={() => setOpen(!open)}>Toggle</Button></Box>;
}
export default Settings2;
