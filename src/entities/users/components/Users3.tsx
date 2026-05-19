
import { useState } from "react";
import { Box, Button, Typography } from "@mui/material";
import LegacyContainer4 from "../../../legacy/containers/LegacyContainer4";
import { Shared4 } from "../../../shared/components/Shared4";
import { useUsers4 } from "../hooks/use-users-4";
export function Users3(props) {
  const [open, setOpen] = useState(false);
  const { keyed, prefix } = useUsers4(props.label);
  return <Box><Typography>{prefix}: {Object.keys(keyed).length}</Typography><Shared4 label="users3">item</Shared4><LegacyContainer4 title="users-3" /><Button onClick={() => setOpen(!open)}>Toggle</Button></Box>;
}
export default Users3;
