
import { useState } from "react";
import { Box, Button, Typography } from "@mui/material";
import LegacyContainer4 from "../../../legacy/containers/LegacyContainer4";
import { Shared4 } from "../../../shared/components/Shared4";
import { useTasks4 } from "../hooks/use-tasks-4";
export function Tasks3(props) {
  const [open, setOpen] = useState(false);
  const { keyed, prefix } = useTasks4(props.label);
  return <Box><Typography>{prefix}: {Object.keys(keyed).length}</Typography><Shared4 label="tasks3">item</Shared4><LegacyContainer4 title="tasks-3" /><Button onClick={() => setOpen(!open)}>Toggle</Button></Box>;
}
export default Tasks3;
