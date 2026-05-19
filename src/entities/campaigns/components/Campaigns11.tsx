
import { useState } from "react";
import { Box, Button, Typography } from "@mui/material";

import { Shared12 } from "../../../shared/components/Shared12";
import { useCampaigns4 } from "../hooks/use-campaigns-4";
export function Campaigns11(props) {
  const [open, setOpen] = useState(false);
  const { keyed, prefix } = useCampaigns4(props.label);
  return <Box><Typography>{prefix}: {Object.keys(keyed).length}</Typography><Shared12 label="campaigns11">item</Shared12><Button onClick={() => setOpen(!open)}>Toggle</Button></Box>;
}
export default Campaigns11;
