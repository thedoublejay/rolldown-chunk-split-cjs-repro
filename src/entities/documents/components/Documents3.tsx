
import { useState } from "react";
import { Box, Button, Typography } from "@mui/material";
import LegacyContainer4 from "../../../legacy/containers/LegacyContainer4";
import { Shared4 } from "../../../shared/components/Shared4";
import { useDocuments4 } from "../hooks/use-documents-4";
export function Documents3(props) {
  const [open, setOpen] = useState(false);
  const { keyed, prefix } = useDocuments4(props.label);
  return <Box><Typography>{prefix}: {Object.keys(keyed).length}</Typography><Shared4 label="documents3">item</Shared4><LegacyContainer4 title="documents-3" /><Button onClick={() => setOpen(!open)}>Toggle</Button></Box>;
}
export default Documents3;
