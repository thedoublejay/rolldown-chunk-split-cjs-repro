
import { useState } from "react";
import { Box, Button, Typography } from "@mui/material";

import { Shared12 } from "../../../shared/components/Shared12";
import { useQueues4 } from "../hooks/use-queues-4";
export function Queues11(props) {
  const [open, setOpen] = useState(false);
  const { keyed, prefix } = useQueues4(props.label);
  return <Box><Typography>{prefix}: {Object.keys(keyed).length}</Typography><Shared12 label="queues11">item</Shared12><Button onClick={() => setOpen(!open)}>Toggle</Button></Box>;
}
export default Queues11;
