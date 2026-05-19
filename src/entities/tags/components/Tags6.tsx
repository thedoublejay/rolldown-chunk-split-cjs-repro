
import { useState } from "react";
import { Box, Button, Typography } from "@mui/material";
import LegacyContainer7 from "../../../legacy/containers/LegacyContainer7";
import { Shared7 } from "../../../shared/components/Shared7";
import { useTags7 } from "../hooks/use-tags-7";
export function Tags6(props) {
  const [open, setOpen] = useState(false);
  const { keyed, prefix } = useTags7(props.label);
  return <Box><Typography>{prefix}: {Object.keys(keyed).length}</Typography><Shared7 label="tags6">item</Shared7><LegacyContainer7 title="tags-6" /><Button onClick={() => setOpen(!open)}>Toggle</Button></Box>;
}
export default Tags6;
