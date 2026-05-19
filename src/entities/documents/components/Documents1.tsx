
import { useState } from "react";
import { Box, Button, Typography } from "@mui/material";

import { Shared2 } from "../../../shared/components/Shared2";
import { useDocuments2 } from "../hooks/use-documents-2";
export function Documents1(props) {
  const [open, setOpen] = useState(false);
  const { keyed, prefix } = useDocuments2(props.label);
  return <Box><Typography>{prefix}: {Object.keys(keyed).length}</Typography><Shared2 label="documents1">item</Shared2><Button onClick={() => setOpen(!open)}>Toggle</Button></Box>;
}
export default Documents1;
