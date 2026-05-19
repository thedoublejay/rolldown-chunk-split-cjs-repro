
import { useState } from "react";
import { Box, Button, Typography } from "@mui/material";
import LegacyContainer7 from "../../../legacy/containers/LegacyContainer7";
import { Shared7 } from "../../../shared/components/Shared7";
import { useDocuments7 } from "../hooks/use-documents-7";
export function Documents6(props) {
  const [open, setOpen] = useState(false);
  const { keyed, prefix } = useDocuments7(props.label);
  return <Box><Typography>{prefix}: {Object.keys(keyed).length}</Typography><Shared7 label="documents6">item</Shared7><LegacyContainer7 title="documents-6" /><Button onClick={() => setOpen(!open)}>Toggle</Button></Box>;
}
export default Documents6;
