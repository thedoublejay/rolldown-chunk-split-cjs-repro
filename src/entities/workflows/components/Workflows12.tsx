
import { useState } from "react";
import { Box, Button, Typography } from "@mui/material";
import LegacyContainer13 from "../../../legacy/containers/LegacyContainer13";
import { Shared13 } from "../../../shared/components/Shared13";
import { useWorkflows5 } from "../hooks/use-workflows-5";
export function Workflows12(props) {
  const [open, setOpen] = useState(false);
  const { keyed, prefix } = useWorkflows5(props.label);
  return <Box><Typography>{prefix}: {Object.keys(keyed).length}</Typography><Shared13 label="workflows12">item</Shared13><LegacyContainer13 title="workflows-12" /><Button onClick={() => setOpen(!open)}>Toggle</Button></Box>;
}
export default Workflows12;
