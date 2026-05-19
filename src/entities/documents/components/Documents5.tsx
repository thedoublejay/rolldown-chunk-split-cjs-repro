
import { useState } from "react";
import { Box, Button, Typography } from "@mui/material";

import { Shared6 } from "../../../shared/components/Shared6";
import { useDocuments6 } from "../hooks/use-documents-6";
export function Documents5(props) {
  const [open, setOpen] = useState(false);
  const { keyed, prefix } = useDocuments6(props.label);
  return <Box><Typography>{prefix}: {Object.keys(keyed).length}</Typography><Shared6 label="documents5">item</Shared6><Button onClick={() => setOpen(!open)}>Toggle</Button></Box>;
}
export default Documents5;
