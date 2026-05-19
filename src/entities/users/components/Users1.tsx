
import { useState } from "react";
import { Box, Button, Typography } from "@mui/material";

import { Shared2 } from "../../../shared/components/Shared2";
import { useUsers2 } from "../hooks/use-users-2";
export function Users1(props) {
  const [open, setOpen] = useState(false);
  const { keyed, prefix } = useUsers2(props.label);
  return <Box><Typography>{prefix}: {Object.keys(keyed).length}</Typography><Shared2 label="users1">item</Shared2><Button onClick={() => setOpen(!open)}>Toggle</Button></Box>;
}
export default Users1;
