
import { useState } from "react";
import { Box, Button, Typography } from "@mui/material";
import LegacyContainer10 from "../../../legacy/containers/LegacyContainer10";
import { Shared10 } from "../../../shared/components/Shared10";
import { useDocuments2 } from "../hooks/use-documents-2";
export function Documents9(props) {
  const [open, setOpen] = useState(false);
  const { keyed, prefix } = useDocuments2(props.label);
  return <Box><Typography>{prefix}: {Object.keys(keyed).length}</Typography><Shared10 label="documents9">item</Shared10><LegacyContainer10 title="documents-9" /><Button onClick={() => setOpen(!open)}>Toggle</Button></Box>;
}
export default Documents9;
