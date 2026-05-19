
import { useState } from "react";
import { Box, Button, Typography } from "@mui/material";
import LegacyContainer4 from "../../../legacy/containers/LegacyContainer4";
import { Shared4 } from "../../../shared/components/Shared4";
import { useSettings4 } from "../hooks/use-settings-4";
export function Settings3(props) {
  const [open, setOpen] = useState(false);
  const { keyed, prefix } = useSettings4(props.label);
  return <Box><Typography>{prefix}: {Object.keys(keyed).length}</Typography><Shared4 label="settings3">item</Shared4><LegacyContainer4 title="settings-3" /><Button onClick={() => setOpen(!open)}>Toggle</Button></Box>;
}
export default Settings3;
