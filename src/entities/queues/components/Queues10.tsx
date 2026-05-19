
import { useState } from "react";
import { Box, Button, Typography } from "@mui/material";

import { Shared11 } from "../../../shared/components/Shared11";
import { useQueues3 } from "../hooks/use-queues-3";
export function Queues10(props) {
  const [open, setOpen] = useState(false);
  const { keyed, prefix } = useQueues3(props.label);
  return <Box><Typography>{prefix}: {Object.keys(keyed).length}</Typography><Shared11 label="queues10">item</Shared11><Button onClick={() => setOpen(!open)}>Toggle</Button></Box>;
}
export default Queues10;
