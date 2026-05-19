
import { useState } from "react";
import { Box, Button, Typography } from "@mui/material";

import { Shared6 } from "../../../shared/components/Shared6";
import { useFeeds6 } from "../hooks/use-feeds-6";
export function Feeds5(props) {
  const [open, setOpen] = useState(false);
  const { keyed, prefix } = useFeeds6(props.label);
  return <Box><Typography>{prefix}: {Object.keys(keyed).length}</Typography><Shared6 label="feeds5">item</Shared6><Button onClick={() => setOpen(!open)}>Toggle</Button></Box>;
}
export default Feeds5;
