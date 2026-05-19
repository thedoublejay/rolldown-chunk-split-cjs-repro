
import { useState } from "react";
import { Box, Button, Typography } from "@mui/material";

import { Shared3 } from "../../../shared/components/Shared3";
import { useFeeds3 } from "../hooks/use-feeds-3";
export function Feeds2(props) {
  const [open, setOpen] = useState(false);
  const { keyed, prefix } = useFeeds3(props.label);
  return <Box><Typography>{prefix}: {Object.keys(keyed).length}</Typography><Shared3 label="feeds2">item</Shared3><Button onClick={() => setOpen(!open)}>Toggle</Button></Box>;
}
export default Feeds2;
