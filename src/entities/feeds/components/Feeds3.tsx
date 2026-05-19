
import { useState } from "react";
import { Box, Button, Typography } from "@mui/material";
import LegacyContainer4 from "../../../legacy/containers/LegacyContainer4";
import { Shared4 } from "../../../shared/components/Shared4";
import { useFeeds4 } from "../hooks/use-feeds-4";
export function Feeds3(props) {
  const [open, setOpen] = useState(false);
  const { keyed, prefix } = useFeeds4(props.label);
  return <Box><Typography>{prefix}: {Object.keys(keyed).length}</Typography><Shared4 label="feeds3">item</Shared4><LegacyContainer4 title="feeds-3" /><Button onClick={() => setOpen(!open)}>Toggle</Button></Box>;
}
export default Feeds3;
