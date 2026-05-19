
import { useState } from "react";
import { Box, Button, Typography } from "@mui/material";

import { Shared5 } from "../../../shared/components/Shared5";
import { useDocuments5 } from "../hooks/use-documents-5";
export function Documents4(props) {
  const [open, setOpen] = useState(false);
  const { keyed, prefix } = useDocuments5(props.label);
  return <Box><Typography>{prefix}: {Object.keys(keyed).length}</Typography><Shared5 label="documents4">item</Shared5><Button onClick={() => setOpen(!open)}>Toggle</Button></Box>;
}
export default Documents4;
