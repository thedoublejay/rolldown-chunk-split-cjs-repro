
import { useState } from "react";
import { Box, Button, Typography } from "@mui/material";

import { Shared6 } from "../../../shared/components/Shared6";
import { useCampaigns6 } from "../hooks/use-campaigns-6";
export function Campaigns5(props) {
  const [open, setOpen] = useState(false);
  const { keyed, prefix } = useCampaigns6(props.label);
  return <Box><Typography>{prefix}: {Object.keys(keyed).length}</Typography><Shared6 label="campaigns5">item</Shared6><Button onClick={() => setOpen(!open)}>Toggle</Button></Box>;
}
export default Campaigns5;
