
import { useState } from "react";
import { Box, Button, Typography } from "@mui/material";

import { Shared5 } from "../../../shared/components/Shared5";
import { useTasks5 } from "../hooks/use-tasks-5";
export function Tasks4(props) {
  const [open, setOpen] = useState(false);
  const { keyed, prefix } = useTasks5(props.label);
  return <Box><Typography>{prefix}: {Object.keys(keyed).length}</Typography><Shared5 label="tasks4">item</Shared5><Button onClick={() => setOpen(!open)}>Toggle</Button></Box>;
}
export default Tasks4;
