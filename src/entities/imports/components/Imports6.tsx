
import { useState } from "react";
import { Box, Button, Typography } from "@mui/material";
import LegacyContainer7 from "../../../legacy/containers/LegacyContainer7";
import { Shared7 } from "../../../shared/components/Shared7";
import { useImports7 } from "../hooks/use-imports-7";
export function Imports6(props) {
  const [open, setOpen] = useState(false);
  const { keyed, prefix } = useImports7(props.label);
  return <Box><Typography>{prefix}: {Object.keys(keyed).length}</Typography><Shared7 label="imports6">item</Shared7><LegacyContainer7 title="imports-6" /><Button onClick={() => setOpen(!open)}>Toggle</Button></Box>;
}
export default Imports6;
