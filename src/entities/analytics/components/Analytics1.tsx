
import { useState } from "react";
import { Box, Button, Typography } from "@mui/material";

import { Shared2 } from "../../../shared/components/Shared2";
import { useAnalytics2 } from "../hooks/use-analytics-2";
export function Analytics1(props) {
  const [open, setOpen] = useState(false);
  const { keyed, prefix } = useAnalytics2(props.label);
  return <Box><Typography>{prefix}: {Object.keys(keyed).length}</Typography><Shared2 label="analytics1">item</Shared2><Button onClick={() => setOpen(!open)}>Toggle</Button></Box>;
}
export default Analytics1;
