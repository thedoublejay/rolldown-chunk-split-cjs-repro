
import { useState } from "react";
import { Box, Button, Typography } from "@mui/material";

import { Shared3 } from "../../../shared/components/Shared3";
import { useCampaigns3 } from "../hooks/use-campaigns-3";
export function Campaigns2(props) {
  const [open, setOpen] = useState(false);
  const { keyed, prefix } = useCampaigns3(props.label);
  return <Box><Typography>{prefix}: {Object.keys(keyed).length}</Typography><Shared3 label="campaigns2">item</Shared3><Button onClick={() => setOpen(!open)}>Toggle</Button></Box>;
}
export default Campaigns2;
