
import { useState } from "react";
import { Box, Button, Typography } from "@mui/material";

import { Shared11 } from "../../../shared/components/Shared11";
import { useFeeds3 } from "../hooks/use-feeds-3";
export function Feeds10(props) {
  const [open, setOpen] = useState(false);
  const { keyed, prefix } = useFeeds3(props.label);
  return <Box><Typography>{prefix}: {Object.keys(keyed).length}</Typography><Shared11 label="feeds10">item</Shared11><Button onClick={() => setOpen(!open)}>Toggle</Button></Box>;
}
export default Feeds10;
