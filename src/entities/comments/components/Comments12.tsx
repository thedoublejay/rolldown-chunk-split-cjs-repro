
import { useState } from "react";
import { Box, Button, Typography } from "@mui/material";
import LegacyContainer13 from "../../../legacy/containers/LegacyContainer13";
import { Shared13 } from "../../../shared/components/Shared13";
import { useComments5 } from "../hooks/use-comments-5";
export function Comments12(props) {
  const [open, setOpen] = useState(false);
  const { keyed, prefix } = useComments5(props.label);
  return <Box><Typography>{prefix}: {Object.keys(keyed).length}</Typography><Shared13 label="comments12">item</Shared13><LegacyContainer13 title="comments-12" /><Button onClick={() => setOpen(!open)}>Toggle</Button></Box>;
}
export default Comments12;
