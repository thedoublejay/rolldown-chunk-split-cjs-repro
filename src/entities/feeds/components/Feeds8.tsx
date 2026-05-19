
import { useState } from "react";
import { Box, Button, Typography } from "@mui/material";

import { Shared9 } from "../../../shared/components/Shared9";
import { useFeeds1 } from "../hooks/use-feeds-1";
export function Feeds8(props) {
  const [open, setOpen] = useState(false);
  const { keyed, prefix } = useFeeds1(props.label);
  return <Box><Typography>{prefix}: {Object.keys(keyed).length}</Typography><Shared9 label="feeds8">item</Shared9><Button onClick={() => setOpen(!open)}>Toggle</Button></Box>;
}
export default Feeds8;
