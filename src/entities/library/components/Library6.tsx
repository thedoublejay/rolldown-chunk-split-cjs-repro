
import { useState } from "react";
import { Box, Button, Typography } from "@mui/material";
import LegacyContainer7 from "../../../legacy/containers/LegacyContainer7";
import { Shared7 } from "../../../shared/components/Shared7";
import { useLibrary7 } from "../hooks/use-library-7";
export function Library6(props) {
  const [open, setOpen] = useState(false);
  const { keyed, prefix } = useLibrary7(props.label);
  return <Box><Typography>{prefix}: {Object.keys(keyed).length}</Typography><Shared7 label="library6">item</Shared7><LegacyContainer7 title="library-6" /><Button onClick={() => setOpen(!open)}>Toggle</Button></Box>;
}
export default Library6;
