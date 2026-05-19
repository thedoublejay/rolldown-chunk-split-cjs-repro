
import { useState } from "react";
import { Box, Button, Typography } from "@mui/material";

import { Shared11 } from "../../../shared/components/Shared11";
import { useDocuments3 } from "../hooks/use-documents-3";
export function Documents10(props) {
  const [open, setOpen] = useState(false);
  const { keyed, prefix } = useDocuments3(props.label);
  return <Box><Typography>{prefix}: {Object.keys(keyed).length}</Typography><Shared11 label="documents10">item</Shared11><Button onClick={() => setOpen(!open)}>Toggle</Button></Box>;
}
export default Documents10;
