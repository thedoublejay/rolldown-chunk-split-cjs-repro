
import { useState } from "react";
import { Box, Button, Typography } from "@mui/material";
import LegacyContainer7 from "../../../legacy/containers/LegacyContainer7";
import { Shared7 } from "../../../shared/components/Shared7";
import { useTasks7 } from "../hooks/use-tasks-7";
export function Tasks6(props) {
  const [open, setOpen] = useState(false);
  const { keyed, prefix } = useTasks7(props.label);
  return <Box><Typography>{prefix}: {Object.keys(keyed).length}</Typography><Shared7 label="tasks6">item</Shared7><LegacyContainer7 title="tasks-6" /><Button onClick={() => setOpen(!open)}>Toggle</Button></Box>;
}
export default Tasks6;
