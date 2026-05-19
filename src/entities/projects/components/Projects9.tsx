
import { useState } from "react";
import { Box, Button, Typography } from "@mui/material";
import LegacyContainer10 from "../../../legacy/containers/LegacyContainer10";
import { Shared10 } from "../../../shared/components/Shared10";
import { useProjects2 } from "../hooks/use-projects-2";
export function Projects9(props) {
  const [open, setOpen] = useState(false);
  const { keyed, prefix } = useProjects2(props.label);
  return <Box><Typography>{prefix}: {Object.keys(keyed).length}</Typography><Shared10 label="projects9">item</Shared10><LegacyContainer10 title="projects-9" /><Button onClick={() => setOpen(!open)}>Toggle</Button></Box>;
}
export default Projects9;
