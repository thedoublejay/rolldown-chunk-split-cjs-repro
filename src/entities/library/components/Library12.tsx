
import { useState } from "react";
import { Box, Button, Typography } from "@mui/material";
import LegacyContainer13 from "../../../legacy/containers/LegacyContainer13";
import { Shared13 } from "../../../shared/components/Shared13";
import { useLibrary5 } from "../hooks/use-library-5";
export function Library12(props) {
  const [open, setOpen] = useState(false);
  const { keyed, prefix } = useLibrary5(props.label);
  return <Box><Typography>{prefix}: {Object.keys(keyed).length}</Typography><Shared13 label="library12">item</Shared13><LegacyContainer13 title="library-12" /><Button onClick={() => setOpen(!open)}>Toggle</Button></Box>;
}
export default Library12;
