
import { useState } from "react";
import { Box, Button, Typography } from "@mui/material";

import { Shared8 } from "../../../shared/components/Shared8";
import { useCampaigns8 } from "../hooks/use-campaigns-8";
export function Campaigns7(props) {
  const [open, setOpen] = useState(false);
  const { keyed, prefix } = useCampaigns8(props.label);
  return <Box><Typography>{prefix}: {Object.keys(keyed).length}</Typography><Shared8 label="campaigns7">item</Shared8><Button onClick={() => setOpen(!open)}>Toggle</Button></Box>;
}
export default Campaigns7;
