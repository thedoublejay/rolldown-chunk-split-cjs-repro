
import { useState } from "react";
import { Box, Button, Typography } from "@mui/material";
import LegacyContainer13 from "../../../legacy/containers/LegacyContainer13";
import { Shared13 } from "../../../shared/components/Shared13";
import { useSettings5 } from "../hooks/use-settings-5";
export function Settings12(props) {
  const [open, setOpen] = useState(false);
  const { keyed, prefix } = useSettings5(props.label);
  return <Box><Typography>{prefix}: {Object.keys(keyed).length}</Typography><Shared13 label="settings12">item</Shared13><LegacyContainer13 title="settings-12" /><Button onClick={() => setOpen(!open)}>Toggle</Button></Box>;
}
export default Settings12;
