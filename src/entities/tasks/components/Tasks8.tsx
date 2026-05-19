
import { useState } from "react";
import { Box, Button, Typography } from "@mui/material";

import { Shared9 } from "../../../shared/components/Shared9";
import { useTasks1 } from "../hooks/use-tasks-1";
export function Tasks8(props) {
  const [open, setOpen] = useState(false);
  const { keyed, prefix } = useTasks1(props.label);
  return <Box><Typography>{prefix}: {Object.keys(keyed).length}</Typography><Shared9 label="tasks8">item</Shared9><Button onClick={() => setOpen(!open)}>Toggle</Button></Box>;
}
export default Tasks8;
