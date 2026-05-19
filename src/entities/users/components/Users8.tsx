
import { useState } from "react";
import { Box, Button, Typography } from "@mui/material";

import { Shared9 } from "../../../shared/components/Shared9";
import { useUsers1 } from "../hooks/use-users-1";
export function Users8(props) {
  const [open, setOpen] = useState(false);
  const { keyed, prefix } = useUsers1(props.label);
  return <Box><Typography>{prefix}: {Object.keys(keyed).length}</Typography><Shared9 label="users8">item</Shared9><Button onClick={() => setOpen(!open)}>Toggle</Button></Box>;
}
export default Users8;
