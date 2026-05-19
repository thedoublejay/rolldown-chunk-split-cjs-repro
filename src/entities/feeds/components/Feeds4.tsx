
import { useState } from "react";
import { Box, Button, Typography } from "@mui/material";

import { Shared5 } from "../../../shared/components/Shared5";
import { useFeeds5 } from "../hooks/use-feeds-5";
export function Feeds4(props) {
  const [open, setOpen] = useState(false);
  const { keyed, prefix } = useFeeds5(props.label);
  return <Box><Typography>{prefix}: {Object.keys(keyed).length}</Typography><Shared5 label="feeds4">item</Shared5><Button onClick={() => setOpen(!open)}>Toggle</Button></Box>;
}
export default Feeds4;
