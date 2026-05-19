
import { useState } from "react";
import { Box, Button, Typography } from "@mui/material";

import { Shared12 } from "../../../shared/components/Shared12";
import { useDocuments4 } from "../hooks/use-documents-4";
export function Documents11(props) {
  const [open, setOpen] = useState(false);
  const { keyed, prefix } = useDocuments4(props.label);
  return <Box><Typography>{prefix}: {Object.keys(keyed).length}</Typography><Shared12 label="documents11">item</Shared12><Button onClick={() => setOpen(!open)}>Toggle</Button></Box>;
}
export default Documents11;
