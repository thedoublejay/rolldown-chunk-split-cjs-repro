
import { useState } from "react";
import { Box, Button, Typography } from "@mui/material";

import { Shared9 } from "../../../shared/components/Shared9";
import { useProjects1 } from "../hooks/use-projects-1";
export function Projects8(props) {
  const [open, setOpen] = useState(false);
  const { keyed, prefix } = useProjects1(props.label);
  return <Box><Typography>{prefix}: {Object.keys(keyed).length}</Typography><Shared9 label="projects8">item</Shared9><Button onClick={() => setOpen(!open)}>Toggle</Button></Box>;
}
export default Projects8;
