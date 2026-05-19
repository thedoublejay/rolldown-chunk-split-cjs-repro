
import { useState } from "react";
import { Box, Button, Typography } from "@mui/material";

import { Shared11 } from "../../../shared/components/Shared11";
import { useTasks3 } from "../hooks/use-tasks-3";
export function Tasks10(props) {
  const [open, setOpen] = useState(false);
  const { keyed, prefix } = useTasks3(props.label);
  return <Box><Typography>{prefix}: {Object.keys(keyed).length}</Typography><Shared11 label="tasks10">item</Shared11><Button onClick={() => setOpen(!open)}>Toggle</Button></Box>;
}
export default Tasks10;
