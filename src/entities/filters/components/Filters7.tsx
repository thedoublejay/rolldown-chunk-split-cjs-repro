
import { useState } from "react";
import { Box, Button, Typography } from "@mui/material";

import { Shared8 } from "../../../shared/components/Shared8";
import { useFilters8 } from "../hooks/use-filters-8";
export function Filters7(props) {
  const [open, setOpen] = useState(false);
  const { keyed, prefix } = useFilters8(props.label);
  return <Box><Typography>{prefix}: {Object.keys(keyed).length}</Typography><Shared8 label="filters7">item</Shared8><Button onClick={() => setOpen(!open)}>Toggle</Button></Box>;
}
export default Filters7;
