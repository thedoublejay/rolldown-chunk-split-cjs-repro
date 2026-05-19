
import { useState } from "react";
import { Box, Button, Typography } from "@mui/material";
import LegacyContainer7 from "../../../legacy/containers/LegacyContainer7";
import { Shared7 } from "../../../shared/components/Shared7";
import { useFeeds7 } from "../hooks/use-feeds-7";
export function Feeds6(props) {
  const [open, setOpen] = useState(false);
  const { keyed, prefix } = useFeeds7(props.label);
  return <Box><Typography>{prefix}: {Object.keys(keyed).length}</Typography><Shared7 label="feeds6">item</Shared7><LegacyContainer7 title="feeds-6" /><Button onClick={() => setOpen(!open)}>Toggle</Button></Box>;
}
export default Feeds6;
