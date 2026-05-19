
import { useState } from "react";
import { Box, Button, Typography } from "@mui/material";

import { Shared8 } from "../../../shared/components/Shared8";
import { useDocuments8 } from "../hooks/use-documents-8";
export function Documents7(props) {
  const [open, setOpen] = useState(false);
  const { keyed, prefix } = useDocuments8(props.label);
  return <Box><Typography>{prefix}: {Object.keys(keyed).length}</Typography><Shared8 label="documents7">item</Shared8><Button onClick={() => setOpen(!open)}>Toggle</Button></Box>;
}
export default Documents7;
