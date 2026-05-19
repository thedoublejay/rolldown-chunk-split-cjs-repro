
import { useState } from "react";
import { Box, Button, Typography } from "@mui/material";

import { Shared2 } from "../../../shared/components/Shared2";
import { useCampaigns2 } from "../hooks/use-campaigns-2";
export function Campaigns1(props) {
  const [open, setOpen] = useState(false);
  const { keyed, prefix } = useCampaigns2(props.label);
  return <Box><Typography>{prefix}: {Object.keys(keyed).length}</Typography><Shared2 label="campaigns1">item</Shared2><Button onClick={() => setOpen(!open)}>Toggle</Button></Box>;
}
export default Campaigns1;
