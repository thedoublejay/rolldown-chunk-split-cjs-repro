
import { useState } from "react";
import { Box, Button, Typography } from "@mui/material";
import LegacyContainer7 from "../../../legacy/containers/LegacyContainer7";
import { Shared7 } from "../../../shared/components/Shared7";
import { useQueues7 } from "../hooks/use-queues-7";
export function Queues6(props) {
  const [open, setOpen] = useState(false);
  const { keyed, prefix } = useQueues7(props.label);
  return <Box><Typography>{prefix}: {Object.keys(keyed).length}</Typography><Shared7 label="queues6">item</Shared7><LegacyContainer7 title="queues-6" /><Button onClick={() => setOpen(!open)}>Toggle</Button></Box>;
}
export default Queues6;
