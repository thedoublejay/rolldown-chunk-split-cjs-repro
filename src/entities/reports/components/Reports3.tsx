
import { useState } from "react";
import { Box, Button, Typography } from "@mui/material";
import LegacyContainer4 from "../../../legacy/containers/LegacyContainer4";
import { Shared4 } from "../../../shared/components/Shared4";
import { useReports4 } from "../hooks/use-reports-4";
export function Reports3(props) {
  const [open, setOpen] = useState(false);
  const { keyed, prefix } = useReports4(props.label);
  return <Box><Typography>{prefix}: {Object.keys(keyed).length}</Typography><Shared4 label="reports3">item</Shared4><LegacyContainer4 title="reports-3" /><Button onClick={() => setOpen(!open)}>Toggle</Button></Box>;
}
export default Reports3;
