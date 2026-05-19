
import { useState } from "react";
import { Box, Button, Typography } from "@mui/material";

import { Shared9 } from "../../../shared/components/Shared9";
import { useSettings1 } from "../hooks/use-settings-1";
export function Settings8(props) {
  const [open, setOpen] = useState(false);
  const { keyed, prefix } = useSettings1(props.label);
  return <Box><Typography>{prefix}: {Object.keys(keyed).length}</Typography><Shared9 label="settings8">item</Shared9><Button onClick={() => setOpen(!open)}>Toggle</Button></Box>;
}
export default Settings8;
