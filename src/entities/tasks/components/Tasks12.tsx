
import { useState } from "react";
import { Box, Button, Typography } from "@mui/material";
import LegacyContainer13 from "../../../legacy/containers/LegacyContainer13";
import { Shared13 } from "../../../shared/components/Shared13";
import { useTasks5 } from "../hooks/use-tasks-5";
export function Tasks12(props) {
  const [open, setOpen] = useState(false);
  const { keyed, prefix } = useTasks5(props.label);
  return <Box><Typography>{prefix}: {Object.keys(keyed).length}</Typography><Shared13 label="tasks12">item</Shared13><LegacyContainer13 title="tasks-12" /><Button onClick={() => setOpen(!open)}>Toggle</Button></Box>;
}
export default Tasks12;
