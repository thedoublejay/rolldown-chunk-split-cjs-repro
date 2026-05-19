
import { useState } from "react";
import { Box, Button, Typography } from "@mui/material";
import LegacyContainer13 from "../../../legacy/containers/LegacyContainer13";
import { Shared13 } from "../../../shared/components/Shared13";
import { useUsers5 } from "../hooks/use-users-5";
export function Users12(props) {
  const [open, setOpen] = useState(false);
  const { keyed, prefix } = useUsers5(props.label);
  return <Box><Typography>{prefix}: {Object.keys(keyed).length}</Typography><Shared13 label="users12">item</Shared13><LegacyContainer13 title="users-12" /><Button onClick={() => setOpen(!open)}>Toggle</Button></Box>;
}
export default Users12;
