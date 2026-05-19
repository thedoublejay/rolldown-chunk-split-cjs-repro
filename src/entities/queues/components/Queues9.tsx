
import { useState } from "react";
import { Box, Button, Typography } from "@mui/material";
import LegacyContainer10 from "../../../legacy/containers/LegacyContainer10";
import { Shared10 } from "../../../shared/components/Shared10";
import { useQueues2 } from "../hooks/use-queues-2";
export function Queues9(props) {
  const [open, setOpen] = useState(false);
  const { keyed, prefix } = useQueues2(props.label);
  return <Box><Typography>{prefix}: {Object.keys(keyed).length}</Typography><Shared10 label="queues9">item</Shared10><LegacyContainer10 title="queues-9" /><Button onClick={() => setOpen(!open)}>Toggle</Button></Box>;
}
export default Queues9;
