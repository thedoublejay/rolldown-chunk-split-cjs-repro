
import { useState } from "react";
import { Box, Button, Typography } from "@mui/material";
import LegacyContainer10 from "../../../legacy/containers/LegacyContainer10";
import { Shared10 } from "../../../shared/components/Shared10";
import { useWorkflows2 } from "../hooks/use-workflows-2";
export function Workflows9(props) {
  const [open, setOpen] = useState(false);
  const { keyed, prefix } = useWorkflows2(props.label);
  return <Box><Typography>{prefix}: {Object.keys(keyed).length}</Typography><Shared10 label="workflows9">item</Shared10><LegacyContainer10 title="workflows-9" /><Button onClick={() => setOpen(!open)}>Toggle</Button></Box>;
}
export default Workflows9;
