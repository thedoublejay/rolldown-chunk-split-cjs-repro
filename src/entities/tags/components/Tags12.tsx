
import { useState } from "react";
import { Box, Button, Typography } from "@mui/material";
import LegacyContainer13 from "../../../legacy/containers/LegacyContainer13";
import { Shared13 } from "../../../shared/components/Shared13";
import { useTags5 } from "../hooks/use-tags-5";
export function Tags12(props) {
  const [open, setOpen] = useState(false);
  const { keyed, prefix } = useTags5(props.label);
  return <Box><Typography>{prefix}: {Object.keys(keyed).length}</Typography><Shared13 label="tags12">item</Shared13><LegacyContainer13 title="tags-12" /><Button onClick={() => setOpen(!open)}>Toggle</Button></Box>;
}
export default Tags12;
