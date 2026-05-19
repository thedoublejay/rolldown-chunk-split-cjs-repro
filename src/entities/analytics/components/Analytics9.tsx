
import { useState } from "react";
import { Box, Button, Typography } from "@mui/material";
import LegacyContainer10 from "../../../legacy/containers/LegacyContainer10";
import { Shared10 } from "../../../shared/components/Shared10";
import { useAnalytics2 } from "../hooks/use-analytics-2";
export function Analytics9(props) {
  const [open, setOpen] = useState(false);
  const { keyed, prefix } = useAnalytics2(props.label);
  return <Box><Typography>{prefix}: {Object.keys(keyed).length}</Typography><Shared10 label="analytics9">item</Shared10><LegacyContainer10 title="analytics-9" /><Button onClick={() => setOpen(!open)}>Toggle</Button></Box>;
}
export default Analytics9;
