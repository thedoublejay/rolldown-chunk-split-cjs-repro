
import { useState } from "react";
import { Box, Button, Typography } from "@mui/material";

import { Shared6 } from "../../../shared/components/Shared6";
import { useTasks6 } from "../hooks/use-tasks-6";
export function Tasks5(props) {
  const [open, setOpen] = useState(false);
  const { keyed, prefix } = useTasks6(props.label);
  return <Box><Typography>{prefix}: {Object.keys(keyed).length}</Typography><Shared6 label="tasks5">item</Shared6><Button onClick={() => setOpen(!open)}>Toggle</Button></Box>;
}
export default Tasks5;
