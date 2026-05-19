
import { useState } from "react";
import { Box, Button, Typography } from "@mui/material";

import { Shared3 } from "../../../shared/components/Shared3";
import { useUsers3 } from "../hooks/use-users-3";
export function Users2(props) {
  const [open, setOpen] = useState(false);
  const { keyed, prefix } = useUsers3(props.label);
  return <Box><Typography>{prefix}: {Object.keys(keyed).length}</Typography><Shared3 label="users2">item</Shared3><Button onClick={() => setOpen(!open)}>Toggle</Button></Box>;
}
export default Users2;
