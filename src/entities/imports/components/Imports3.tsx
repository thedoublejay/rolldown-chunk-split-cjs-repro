
import { useState } from "react";
import { Box, Button, Typography } from "@mui/material";
import LegacyContainer4 from "../../../legacy/containers/LegacyContainer4";
import { Shared4 } from "../../../shared/components/Shared4";
import { useImports4 } from "../hooks/use-imports-4";
export function Imports3(props) {
  const [open, setOpen] = useState(false);
  const { keyed, prefix } = useImports4(props.label);
  return <Box><Typography>{prefix}: {Object.keys(keyed).length}</Typography><Shared4 label="imports3">item</Shared4><LegacyContainer4 title="imports-3" /><Button onClick={() => setOpen(!open)}>Toggle</Button></Box>;
}
export default Imports3;
