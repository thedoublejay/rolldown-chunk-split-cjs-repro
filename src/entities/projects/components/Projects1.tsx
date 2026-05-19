
import { useState } from "react";
import { Box, Button, Typography } from "@mui/material";

import { Shared2 } from "../../../shared/components/Shared2";
import { useProjects2 } from "../hooks/use-projects-2";
export function Projects1(props) {
  const [open, setOpen] = useState(false);
  const { keyed, prefix } = useProjects2(props.label);
  return <Box><Typography>{prefix}: {Object.keys(keyed).length}</Typography><Shared2 label="projects1">item</Shared2><Button onClick={() => setOpen(!open)}>Toggle</Button></Box>;
}
export default Projects1;
