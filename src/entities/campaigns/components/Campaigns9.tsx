
import { useState } from "react";
import { Box, Button, Typography } from "@mui/material";
import LegacyContainer10 from "../../../legacy/containers/LegacyContainer10";
import { Shared10 } from "../../../shared/components/Shared10";
import { useCampaigns2 } from "../hooks/use-campaigns-2";
export function Campaigns9(props) {
  const [open, setOpen] = useState(false);
  const { keyed, prefix } = useCampaigns2(props.label);
  return <Box><Typography>{prefix}: {Object.keys(keyed).length}</Typography><Shared10 label="campaigns9">item</Shared10><LegacyContainer10 title="campaigns-9" /><Button onClick={() => setOpen(!open)}>Toggle</Button></Box>;
}
export default Campaigns9;
