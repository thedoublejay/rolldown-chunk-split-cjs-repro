
import { useState } from "react";
import { Box, Button, Typography } from "@mui/material";

import { Shared3 } from "../../../shared/components/Shared3";
import { useQueues3 } from "../hooks/use-queues-3";
export function Queues2(props) {
  const [open, setOpen] = useState(false);
  const { keyed, prefix } = useQueues3(props.label);
  return <Box><Typography>{prefix}: {Object.keys(keyed).length}</Typography><Shared3 label="queues2">item</Shared3><Button onClick={() => setOpen(!open)}>Toggle</Button></Box>;
}
export default Queues2;
