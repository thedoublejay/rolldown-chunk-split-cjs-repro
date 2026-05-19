
import { useState } from "react";
import { Box, Button, Typography } from "@mui/material";

import { Shared11 } from "../../../shared/components/Shared11";
import { useProjects3 } from "../hooks/use-projects-3";
export function Projects10(props) {
  const [open, setOpen] = useState(false);
  const { keyed, prefix } = useProjects3(props.label);
  return <Box><Typography>{prefix}: {Object.keys(keyed).length}</Typography><Shared11 label="projects10">item</Shared11><Button onClick={() => setOpen(!open)}>Toggle</Button></Box>;
}
export default Projects10;
