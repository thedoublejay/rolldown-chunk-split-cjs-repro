
import { useState } from "react";
import { Box, Button, Typography } from "@mui/material";
import LegacyContainer10 from "../../../legacy/containers/LegacyContainer10";
import { Shared10 } from "../../../shared/components/Shared10";
import { useUsers2 } from "../hooks/use-users-2";
export function Users9(props) {
  const [open, setOpen] = useState(false);
  const { keyed, prefix } = useUsers2(props.label);
  return <Box><Typography>{prefix}: {Object.keys(keyed).length}</Typography><Shared10 label="users9">item</Shared10><LegacyContainer10 title="users-9" /><Button onClick={() => setOpen(!open)}>Toggle</Button></Box>;
}
export default Users9;
