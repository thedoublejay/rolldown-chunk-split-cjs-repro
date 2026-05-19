
import { useState } from "react";
import { Box, Button, Typography } from "@mui/material";
import LegacyContainer7 from "../../../legacy/containers/LegacyContainer7";
import { Shared7 } from "../../../shared/components/Shared7";
import { useProjects7 } from "../hooks/use-projects-7";
export function Projects6(props) {
  const [open, setOpen] = useState(false);
  const { keyed, prefix } = useProjects7(props.label);
  return <Box><Typography>{prefix}: {Object.keys(keyed).length}</Typography><Shared7 label="projects6">item</Shared7><LegacyContainer7 title="projects-6" /><Button onClick={() => setOpen(!open)}>Toggle</Button></Box>;
}
export default Projects6;
