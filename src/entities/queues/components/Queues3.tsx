
import { useState } from "react";
import { Box, Button, Typography } from "@mui/material";
import LegacyContainer4 from "../../../legacy/containers/LegacyContainer4";
import { Shared4 } from "../../../shared/components/Shared4";
import { useQueues4 } from "../hooks/use-queues-4";
export function Queues3(props) {
  const [open, setOpen] = useState(false);
  const { keyed, prefix } = useQueues4(props.label);
  return <Box><Typography>{prefix}: {Object.keys(keyed).length}</Typography><Shared4 label="queues3">item</Shared4><LegacyContainer4 title="queues-3" /><Button onClick={() => setOpen(!open)}>Toggle</Button></Box>;
}
export default Queues3;
