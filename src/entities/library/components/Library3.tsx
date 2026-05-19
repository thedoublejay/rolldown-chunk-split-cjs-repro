
import { useState } from "react";
import { Box, Button, Typography } from "@mui/material";
import LegacyContainer4 from "../../../legacy/containers/LegacyContainer4";
import { Shared4 } from "../../../shared/components/Shared4";
import { useLibrary4 } from "../hooks/use-library-4";
export function Library3(props) {
  const [open, setOpen] = useState(false);
  const { keyed, prefix } = useLibrary4(props.label);
  return <Box><Typography>{prefix}: {Object.keys(keyed).length}</Typography><Shared4 label="library3">item</Shared4><LegacyContainer4 title="library-3" /><Button onClick={() => setOpen(!open)}>Toggle</Button></Box>;
}
export default Library3;
