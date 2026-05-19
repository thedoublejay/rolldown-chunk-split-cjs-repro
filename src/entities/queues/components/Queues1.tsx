
import { useState } from "react";
import { Box, Button, Typography } from "@mui/material";

import { Shared2 } from "../../../shared/components/Shared2";
import { useQueues2 } from "../hooks/use-queues-2";
export function Queues1(props) {
  const [open, setOpen] = useState(false);
  const { keyed, prefix } = useQueues2(props.label);
  return <Box><Typography>{prefix}: {Object.keys(keyed).length}</Typography><Shared2 label="queues1">item</Shared2><Button onClick={() => setOpen(!open)}>Toggle</Button></Box>;
}
export default Queues1;
