
import { useState } from "react";
import { Box, Button, Typography } from "@mui/material";
import LegacyContainer4 from "../../../legacy/containers/LegacyContainer4";
import { Shared4 } from "../../../shared/components/Shared4";
import { useAlerts4 } from "../hooks/use-alerts-4";
export function Alerts3(props) {
  const [open, setOpen] = useState(false);
  const { keyed, prefix } = useAlerts4(props.label);
  return <Box><Typography>{prefix}: {Object.keys(keyed).length}</Typography><Shared4 label="alerts3">item</Shared4><LegacyContainer4 title="alerts-3" /><Button onClick={() => setOpen(!open)}>Toggle</Button></Box>;
}
export default Alerts3;
