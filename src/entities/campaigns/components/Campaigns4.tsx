
import { useState } from "react";
import { Box, Button, Typography } from "@mui/material";

import { Shared5 } from "../../../shared/components/Shared5";
import { useCampaigns5 } from "../hooks/use-campaigns-5";
export function Campaigns4(props) {
  const [open, setOpen] = useState(false);
  const { keyed, prefix } = useCampaigns5(props.label);
  return <Box><Typography>{prefix}: {Object.keys(keyed).length}</Typography><Shared5 label="campaigns4">item</Shared5><Button onClick={() => setOpen(!open)}>Toggle</Button></Box>;
}
export default Campaigns4;
