
import { useState } from "react";
import { Box, Button, Typography } from "@mui/material";
import LegacyContainer10 from "../../../legacy/containers/LegacyContainer10";
import { Shared10 } from "../../../shared/components/Shared10";
import { useReports2 } from "../hooks/use-reports-2";
export function Reports9(props) {
  const [open, setOpen] = useState(false);
  const { keyed, prefix } = useReports2(props.label);
  return <Box><Typography>{prefix}: {Object.keys(keyed).length}</Typography><Shared10 label="reports9">item</Shared10><LegacyContainer10 title="reports-9" /><Button onClick={() => setOpen(!open)}>Toggle</Button></Box>;
}
export default Reports9;
