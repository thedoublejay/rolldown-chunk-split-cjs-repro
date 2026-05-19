
import { useState } from "react";
import { Box, Button, Typography } from "@mui/material";

import { Shared6 } from "../../../shared/components/Shared6";
import { useUsers6 } from "../hooks/use-users-6";
export function Users5(props) {
  const [open, setOpen] = useState(false);
  const { keyed, prefix } = useUsers6(props.label);
  return <Box><Typography>{prefix}: {Object.keys(keyed).length}</Typography><Shared6 label="users5">item</Shared6><Button onClick={() => setOpen(!open)}>Toggle</Button></Box>;
}
export default Users5;
