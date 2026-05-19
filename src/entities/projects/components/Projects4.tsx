
import { useState } from "react";
import { Box, Button, Typography } from "@mui/material";

import { Shared5 } from "../../../shared/components/Shared5";
import { useProjects5 } from "../hooks/use-projects-5";
export function Projects4(props) {
  const [open, setOpen] = useState(false);
  const { keyed, prefix } = useProjects5(props.label);
  return <Box><Typography>{prefix}: {Object.keys(keyed).length}</Typography><Shared5 label="projects4">item</Shared5><Button onClick={() => setOpen(!open)}>Toggle</Button></Box>;
}
export default Projects4;
