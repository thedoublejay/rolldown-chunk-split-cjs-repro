
import { useState } from "react";
import { Box, Button, Typography } from "@mui/material";
import LegacyContainer4 from "../../../legacy/containers/LegacyContainer4";
import { Shared4 } from "../../../shared/components/Shared4";
import { useCampaigns4 } from "../hooks/use-campaigns-4";
export function Campaigns3(props) {
  const [open, setOpen] = useState(false);
  const { keyed, prefix } = useCampaigns4(props.label);
  return <Box><Typography>{prefix}: {Object.keys(keyed).length}</Typography><Shared4 label="campaigns3">item</Shared4><LegacyContainer4 title="campaigns-3" /><Button onClick={() => setOpen(!open)}>Toggle</Button></Box>;
}
export default Campaigns3;
