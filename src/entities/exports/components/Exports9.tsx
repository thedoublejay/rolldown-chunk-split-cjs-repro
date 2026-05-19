
import { useState } from "react";
import { Box, Button, Typography } from "@mui/material";
import LegacyContainer10 from "../../../legacy/containers/LegacyContainer10";
import { Shared10 } from "../../../shared/components/Shared10";
import { useExports2 } from "../hooks/use-exports-2";
export function Exports9(props) {
  const [open, setOpen] = useState(false);
  const { keyed, prefix } = useExports2(props.label);
  return <Box><Typography>{prefix}: {Object.keys(keyed).length}</Typography><Shared10 label="exports9">item</Shared10><LegacyContainer10 title="exports-9" /><Button onClick={() => setOpen(!open)}>Toggle</Button></Box>;
}
export default Exports9;
