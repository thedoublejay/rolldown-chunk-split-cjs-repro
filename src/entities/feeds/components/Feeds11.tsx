
import { useState } from "react";
import { Box, Button, Typography } from "@mui/material";

import { Shared12 } from "../../../shared/components/Shared12";
import { useFeeds4 } from "../hooks/use-feeds-4";
export function Feeds11(props) {
  const [open, setOpen] = useState(false);
  const { keyed, prefix } = useFeeds4(props.label);
  return <Box><Typography>{prefix}: {Object.keys(keyed).length}</Typography><Shared12 label="feeds11">item</Shared12><Button onClick={() => setOpen(!open)}>Toggle</Button></Box>;
}
export default Feeds11;
