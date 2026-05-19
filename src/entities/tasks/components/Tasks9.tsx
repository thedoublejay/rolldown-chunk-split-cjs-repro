
import { useState } from "react";
import { Box, Button, Typography } from "@mui/material";
import LegacyContainer10 from "../../../legacy/containers/LegacyContainer10";
import { Shared10 } from "../../../shared/components/Shared10";
import { useTasks2 } from "../hooks/use-tasks-2";
export function Tasks9(props) {
  const [open, setOpen] = useState(false);
  const { keyed, prefix } = useTasks2(props.label);
  return <Box><Typography>{prefix}: {Object.keys(keyed).length}</Typography><Shared10 label="tasks9">item</Shared10><LegacyContainer10 title="tasks-9" /><Button onClick={() => setOpen(!open)}>Toggle</Button></Box>;
}
export default Tasks9;
