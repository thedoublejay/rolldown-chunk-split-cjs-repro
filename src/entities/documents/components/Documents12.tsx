
import { useState } from "react";
import { Box, Button, Typography } from "@mui/material";
import LegacyContainer13 from "../../../legacy/containers/LegacyContainer13";
import { Shared13 } from "../../../shared/components/Shared13";
import { useDocuments5 } from "../hooks/use-documents-5";
export function Documents12(props) {
  const [open, setOpen] = useState(false);
  const { keyed, prefix } = useDocuments5(props.label);
  return <Box><Typography>{prefix}: {Object.keys(keyed).length}</Typography><Shared13 label="documents12">item</Shared13><LegacyContainer13 title="documents-12" /><Button onClick={() => setOpen(!open)}>Toggle</Button></Box>;
}
export default Documents12;
