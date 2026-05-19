
import { useState } from "react";
import { Box, Button, Typography } from "@mui/material";

import { Shared9 } from "../../../shared/components/Shared9";
import { useDocuments1 } from "../hooks/use-documents-1";
export function Documents8(props) {
  const [open, setOpen] = useState(false);
  const { keyed, prefix } = useDocuments1(props.label);
  return <Box><Typography>{prefix}: {Object.keys(keyed).length}</Typography><Shared9 label="documents8">item</Shared9><Button onClick={() => setOpen(!open)}>Toggle</Button></Box>;
}
export default Documents8;
