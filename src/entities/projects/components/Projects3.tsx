
import { useState } from "react";
import { Box, Button, Typography } from "@mui/material";
import LegacyContainer4 from "../../../legacy/containers/LegacyContainer4";
import { Shared4 } from "../../../shared/components/Shared4";
import { useProjects4 } from "../hooks/use-projects-4";
export function Projects3(props) {
  const [open, setOpen] = useState(false);
  const { keyed, prefix } = useProjects4(props.label);
  return <Box><Typography>{prefix}: {Object.keys(keyed).length}</Typography><Shared4 label="projects3">item</Shared4><LegacyContainer4 title="projects-3" /><Button onClick={() => setOpen(!open)}>Toggle</Button></Box>;
}
export default Projects3;
