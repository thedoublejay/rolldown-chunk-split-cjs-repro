
import { useState } from "react";
import { Box, Button, Typography } from "@mui/material";

import { Shared11 } from "../../../shared/components/Shared11";
import { useSettings3 } from "../hooks/use-settings-3";
export function Settings10(props) {
  const [open, setOpen] = useState(false);
  const { keyed, prefix } = useSettings3(props.label);
  return <Box><Typography>{prefix}: {Object.keys(keyed).length}</Typography><Shared11 label="settings10">item</Shared11><Button onClick={() => setOpen(!open)}>Toggle</Button></Box>;
}
export default Settings10;
