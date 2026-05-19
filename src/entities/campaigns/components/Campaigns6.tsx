
import { useState } from "react";
import { Box, Button, Typography } from "@mui/material";
import LegacyContainer7 from "../../../legacy/containers/LegacyContainer7";
import { Shared7 } from "../../../shared/components/Shared7";
import { useCampaigns7 } from "../hooks/use-campaigns-7";
export function Campaigns6(props) {
  const [open, setOpen] = useState(false);
  const { keyed, prefix } = useCampaigns7(props.label);
  return <Box><Typography>{prefix}: {Object.keys(keyed).length}</Typography><Shared7 label="campaigns6">item</Shared7><LegacyContainer7 title="campaigns-6" /><Button onClick={() => setOpen(!open)}>Toggle</Button></Box>;
}
export default Campaigns6;
