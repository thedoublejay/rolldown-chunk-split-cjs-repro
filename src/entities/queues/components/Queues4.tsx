
import { useState } from "react";
import { Box, Button, Typography } from "@mui/material";

import { Shared5 } from "../../../shared/components/Shared5";
import { useQueues5 } from "../hooks/use-queues-5";
export function Queues4(props) {
  const [open, setOpen] = useState(false);
  const { keyed, prefix } = useQueues5(props.label);
  return <Box><Typography>{prefix}: {Object.keys(keyed).length}</Typography><Shared5 label="queues4">item</Shared5><Button onClick={() => setOpen(!open)}>Toggle</Button></Box>;
}
export default Queues4;
