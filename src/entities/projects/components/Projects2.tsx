
import { useState } from "react";
import { Box, Button, Typography } from "@mui/material";

import { Shared3 } from "../../../shared/components/Shared3";
import { useProjects3 } from "../hooks/use-projects-3";
export function Projects2(props) {
  const [open, setOpen] = useState(false);
  const { keyed, prefix } = useProjects3(props.label);
  return <Box><Typography>{prefix}: {Object.keys(keyed).length}</Typography><Shared3 label="projects2">item</Shared3><Button onClick={() => setOpen(!open)}>Toggle</Button></Box>;
}
export default Projects2;
