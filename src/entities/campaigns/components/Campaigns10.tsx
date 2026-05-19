
import { useState } from "react";
import { Box, Button, Typography } from "@mui/material";

import { Shared11 } from "../../../shared/components/Shared11";
import { useCampaigns3 } from "../hooks/use-campaigns-3";
export function Campaigns10(props) {
  const [open, setOpen] = useState(false);
  const { keyed, prefix } = useCampaigns3(props.label);
  return <Box><Typography>{prefix}: {Object.keys(keyed).length}</Typography><Shared11 label="campaigns10">item</Shared11><Button onClick={() => setOpen(!open)}>Toggle</Button></Box>;
}
export default Campaigns10;
