
import { useState } from "react";
import { Box, Button, Typography } from "@mui/material";

import { Shared2 } from "../../../shared/components/Shared2";
import { useTasks2 } from "../hooks/use-tasks-2";
export function Tasks1(props) {
  const [open, setOpen] = useState(false);
  const { keyed, prefix } = useTasks2(props.label);
  return <Box><Typography>{prefix}: {Object.keys(keyed).length}</Typography><Shared2 label="tasks1">item</Shared2><Button onClick={() => setOpen(!open)}>Toggle</Button></Box>;
}
export default Tasks1;
