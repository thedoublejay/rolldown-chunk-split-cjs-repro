
import { useState } from "react";
import { Box, Button, Typography } from "@mui/material";
import LegacyContainer7 from "../../../legacy/containers/LegacyContainer7";
import { Shared7 } from "../../../shared/components/Shared7";
import { useUsers7 } from "../hooks/use-users-7";
export function Users6(props) {
  const [open, setOpen] = useState(false);
  const { keyed, prefix } = useUsers7(props.label);
  return <Box><Typography>{prefix}: {Object.keys(keyed).length}</Typography><Shared7 label="users6">item</Shared7><LegacyContainer7 title="users-6" /><Button onClick={() => setOpen(!open)}>Toggle</Button></Box>;
}
export default Users6;
