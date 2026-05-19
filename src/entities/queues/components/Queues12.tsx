
import { useState } from "react";
import { Box, Button, Typography } from "@mui/material";
import LegacyContainer13 from "../../../legacy/containers/LegacyContainer13";
import { Shared13 } from "../../../shared/components/Shared13";
import { useQueues5 } from "../hooks/use-queues-5";
export function Queues12(props) {
  const [open, setOpen] = useState(false);
  const { keyed, prefix } = useQueues5(props.label);
  return <Box><Typography>{prefix}: {Object.keys(keyed).length}</Typography><Shared13 label="queues12">item</Shared13><LegacyContainer13 title="queues-12" /><Button onClick={() => setOpen(!open)}>Toggle</Button></Box>;
}
export default Queues12;
