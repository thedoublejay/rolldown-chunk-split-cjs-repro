
import { useState } from "react";
import { Box, Button, Typography } from "@mui/material";

import { Shared3 } from "../../../shared/components/Shared3";
import { useTasks3 } from "../hooks/use-tasks-3";
export function Tasks2(props) {
  const [open, setOpen] = useState(false);
  const { keyed, prefix } = useTasks3(props.label);
  return <Box><Typography>{prefix}: {Object.keys(keyed).length}</Typography><Shared3 label="tasks2">item</Shared3><Button onClick={() => setOpen(!open)}>Toggle</Button></Box>;
}
export default Tasks2;
