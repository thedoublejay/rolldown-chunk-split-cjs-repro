
import { useState } from "react";
import { Box, Button, Typography } from "@mui/material";

import { Shared12 } from "../../../shared/components/Shared12";
import { useUsers4 } from "../hooks/use-users-4";
export function Users11(props) {
  const [open, setOpen] = useState(false);
  const { keyed, prefix } = useUsers4(props.label);
  return <Box><Typography>{prefix}: {Object.keys(keyed).length}</Typography><Shared12 label="users11">item</Shared12><Button onClick={() => setOpen(!open)}>Toggle</Button></Box>;
}
export default Users11;
