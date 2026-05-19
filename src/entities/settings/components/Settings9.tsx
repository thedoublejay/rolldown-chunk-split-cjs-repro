
import { useState } from "react";
import { Box, Button, Typography } from "@mui/material";
import LegacyContainer10 from "../../../legacy/containers/LegacyContainer10";
import { Shared10 } from "../../../shared/components/Shared10";
import { useSettings2 } from "../hooks/use-settings-2";
export function Settings9(props) {
  const [open, setOpen] = useState(false);
  const { keyed, prefix } = useSettings2(props.label);
  return <Box><Typography>{prefix}: {Object.keys(keyed).length}</Typography><Shared10 label="settings9">item</Shared10><LegacyContainer10 title="settings-9" /><Button onClick={() => setOpen(!open)}>Toggle</Button></Box>;
}
export default Settings9;
