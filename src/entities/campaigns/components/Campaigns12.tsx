
import { useState } from "react";
import { Box, Button, Typography } from "@mui/material";
import LegacyContainer13 from "../../../legacy/containers/LegacyContainer13";
import { Shared13 } from "../../../shared/components/Shared13";
import { useCampaigns5 } from "../hooks/use-campaigns-5";
export function Campaigns12(props) {
  const [open, setOpen] = useState(false);
  const { keyed, prefix } = useCampaigns5(props.label);
  return <Box><Typography>{prefix}: {Object.keys(keyed).length}</Typography><Shared13 label="campaigns12">item</Shared13><LegacyContainer13 title="campaigns-12" /><Button onClick={() => setOpen(!open)}>Toggle</Button></Box>;
}
export default Campaigns12;
