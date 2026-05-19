
import { useState } from "react";
import { Box, Button, Typography } from "@mui/material";
import LegacyContainer13 from "../../../legacy/containers/LegacyContainer13";
import { Shared13 } from "../../../shared/components/Shared13";
import { useReports5 } from "../hooks/use-reports-5";
export function Reports12(props) {
  const [open, setOpen] = useState(false);
  const { keyed, prefix } = useReports5(props.label);
  return <Box><Typography>{prefix}: {Object.keys(keyed).length}</Typography><Shared13 label="reports12">item</Shared13><LegacyContainer13 title="reports-12" /><Button onClick={() => setOpen(!open)}>Toggle</Button></Box>;
}
export default Reports12;
