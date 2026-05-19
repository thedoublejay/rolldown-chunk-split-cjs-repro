
import { useState } from "react";
import { Box, Button, Typography } from "@mui/material";

import { Shared8 } from "../../../shared/components/Shared8";
import { useTasks8 } from "../hooks/use-tasks-8";
export function Tasks7(props) {
  const [open, setOpen] = useState(false);
  const { keyed, prefix } = useTasks8(props.label);
  return <Box><Typography>{prefix}: {Object.keys(keyed).length}</Typography><Shared8 label="tasks7">item</Shared8><Button onClick={() => setOpen(!open)}>Toggle</Button></Box>;
}
export default Tasks7;
