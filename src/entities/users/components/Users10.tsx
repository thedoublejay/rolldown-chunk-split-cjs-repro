
import { useState } from "react";
import { Box, Button, Typography } from "@mui/material";

import { Shared11 } from "../../../shared/components/Shared11";
import { useUsers3 } from "../hooks/use-users-3";
export function Users10(props) {
  const [open, setOpen] = useState(false);
  const { keyed, prefix } = useUsers3(props.label);
  return <Box><Typography>{prefix}: {Object.keys(keyed).length}</Typography><Shared11 label="users10">item</Shared11><Button onClick={() => setOpen(!open)}>Toggle</Button></Box>;
}
export default Users10;
