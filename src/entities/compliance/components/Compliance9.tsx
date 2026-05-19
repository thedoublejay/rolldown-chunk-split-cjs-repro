
import { useState } from "react";
import { Box, Button, Typography } from "@mui/material";
import LegacyContainer10 from "../../../legacy/containers/LegacyContainer10";
import { Shared10 } from "../../../shared/components/Shared10";
import { useCompliance2 } from "../hooks/use-compliance-2";
export function Compliance9(props) {
  const [open, setOpen] = useState(false);
  const { keyed, prefix } = useCompliance2(props.label);
  return <Box><Typography>{prefix}: {Object.keys(keyed).length}</Typography><Shared10 label="compliance9">item</Shared10><LegacyContainer10 title="compliance-9" /><Button onClick={() => setOpen(!open)}>Toggle</Button></Box>;
}
export default Compliance9;
