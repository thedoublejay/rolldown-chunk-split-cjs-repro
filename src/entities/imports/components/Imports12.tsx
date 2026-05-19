
import { useState } from "react";
import { Box, Button, Typography } from "@mui/material";
import LegacyContainer13 from "../../../legacy/containers/LegacyContainer13";
import { Shared13 } from "../../../shared/components/Shared13";
import { useImports5 } from "../hooks/use-imports-5";
export function Imports12(props) {
  const [open, setOpen] = useState(false);
  const { keyed, prefix } = useImports5(props.label);
  return <Box><Typography>{prefix}: {Object.keys(keyed).length}</Typography><Shared13 label="imports12">item</Shared13><LegacyContainer13 title="imports-12" /><Button onClick={() => setOpen(!open)}>Toggle</Button></Box>;
}
export default Imports12;
