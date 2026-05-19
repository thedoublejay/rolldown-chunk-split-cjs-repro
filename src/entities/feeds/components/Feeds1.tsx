
import { useState } from "react";
import { Box, Button, Typography } from "@mui/material";

import { Shared2 } from "../../../shared/components/Shared2";
import { useFeeds2 } from "../hooks/use-feeds-2";
export function Feeds1(props) {
  const [open, setOpen] = useState(false);
  const { keyed, prefix } = useFeeds2(props.label);
  return <Box><Typography>{prefix}: {Object.keys(keyed).length}</Typography><Shared2 label="feeds1">item</Shared2><Button onClick={() => setOpen(!open)}>Toggle</Button></Box>;
}
export default Feeds1;
