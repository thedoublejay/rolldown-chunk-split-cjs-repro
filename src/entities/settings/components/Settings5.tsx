
import { useState } from "react";
import { Box, Button, Typography } from "@mui/material";

import { Shared6 } from "../../../shared/components/Shared6";
import { useSettings6 } from "../hooks/use-settings-6";
export function Settings5(props) {
  const [open, setOpen] = useState(false);
  const { keyed, prefix } = useSettings6(props.label);
  return <Box><Typography>{prefix}: {Object.keys(keyed).length}</Typography><Shared6 label="settings5">item</Shared6><Button onClick={() => setOpen(!open)}>Toggle</Button></Box>;
}
export default Settings5;
