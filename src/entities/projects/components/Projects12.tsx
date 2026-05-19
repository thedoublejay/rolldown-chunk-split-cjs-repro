
import { useState } from "react";
import { Box, Button, Typography } from "@mui/material";
import LegacyContainer13 from "../../../legacy/containers/LegacyContainer13";
import { Shared13 } from "../../../shared/components/Shared13";
import { useProjects5 } from "../hooks/use-projects-5";
export function Projects12(props) {
  const [open, setOpen] = useState(false);
  const { keyed, prefix } = useProjects5(props.label);
  return <Box><Typography>{prefix}: {Object.keys(keyed).length}</Typography><Shared13 label="projects12">item</Shared13><LegacyContainer13 title="projects-12" /><Button onClick={() => setOpen(!open)}>Toggle</Button></Box>;
}
export default Projects12;
