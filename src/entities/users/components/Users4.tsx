
import { useState } from "react";
import { Box, Button, Typography } from "@mui/material";

import { Shared5 } from "../../../shared/components/Shared5";
import { useUsers5 } from "../hooks/use-users-5";
export function Users4(props) {
  const [open, setOpen] = useState(false);
  const { keyed, prefix } = useUsers5(props.label);
  return <Box><Typography>{prefix}: {Object.keys(keyed).length}</Typography><Shared5 label="users4">item</Shared5><Button onClick={() => setOpen(!open)}>Toggle</Button></Box>;
}
export default Users4;
