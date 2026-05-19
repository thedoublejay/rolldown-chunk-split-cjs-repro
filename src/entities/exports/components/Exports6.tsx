
import { useState } from "react";
import { Box, Button, Typography } from "@mui/material";
import LegacyContainer7 from "../../../legacy/containers/LegacyContainer7";
import { Shared7 } from "../../../shared/components/Shared7";
import { useExports7 } from "../hooks/use-exports-7";
export function Exports6(props) {
  const [open, setOpen] = useState(false);
  const { keyed, prefix } = useExports7(props.label);
  return <Box><Typography>{prefix}: {Object.keys(keyed).length}</Typography><Shared7 label="exports6">item</Shared7><LegacyContainer7 title="exports-6" /><Button onClick={() => setOpen(!open)}>Toggle</Button></Box>;
}
export default Exports6;
