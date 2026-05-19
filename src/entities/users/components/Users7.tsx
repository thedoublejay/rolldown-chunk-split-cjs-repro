
import { useState } from "react";
import { Box, Button, Typography } from "@mui/material";

import { Shared8 } from "../../../shared/components/Shared8";
import { useUsers8 } from "../hooks/use-users-8";
export function Users7(props) {
  const [open, setOpen] = useState(false);
  const { keyed, prefix } = useUsers8(props.label);
  return <Box><Typography>{prefix}: {Object.keys(keyed).length}</Typography><Shared8 label="users7">item</Shared8><Button onClick={() => setOpen(!open)}>Toggle</Button></Box>;
}
export default Users7;
