
import { useState } from "react";
import { Box, Button, Typography } from "@mui/material";

import { Shared6 } from "../../../shared/components/Shared6";
import { useProjects6 } from "../hooks/use-projects-6";
export function Projects5(props) {
  const [open, setOpen] = useState(false);
  const { keyed, prefix } = useProjects6(props.label);
  return <Box><Typography>{prefix}: {Object.keys(keyed).length}</Typography><Shared6 label="projects5">item</Shared6><Button onClick={() => setOpen(!open)}>Toggle</Button></Box>;
}
export default Projects5;
