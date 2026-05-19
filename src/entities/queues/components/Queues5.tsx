
import { useState } from "react";
import { Box, Button, Typography } from "@mui/material";

import { Shared6 } from "../../../shared/components/Shared6";
import { useQueues6 } from "../hooks/use-queues-6";
export function Queues5(props) {
  const [open, setOpen] = useState(false);
  const { keyed, prefix } = useQueues6(props.label);
  return <Box><Typography>{prefix}: {Object.keys(keyed).length}</Typography><Shared6 label="queues5">item</Shared6><Button onClick={() => setOpen(!open)}>Toggle</Button></Box>;
}
export default Queues5;
