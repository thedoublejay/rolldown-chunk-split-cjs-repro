
import { useState } from "react";
import { Box, Button, Typography } from "@mui/material";

import { Shared8 } from "../../../shared/components/Shared8";
import { useQueues8 } from "../hooks/use-queues-8";
export function Queues7(props) {
  const [open, setOpen] = useState(false);
  const { keyed, prefix } = useQueues8(props.label);
  return <Box><Typography>{prefix}: {Object.keys(keyed).length}</Typography><Shared8 label="queues7">item</Shared8><Button onClick={() => setOpen(!open)}>Toggle</Button></Box>;
}
export default Queues7;
