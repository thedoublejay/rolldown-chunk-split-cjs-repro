
import { useState } from "react";
import { Box, Button, Typography } from "@mui/material";

import { Shared3 } from "../../../shared/components/Shared3";
import { useFilters3 } from "../hooks/use-filters-3";
export function Filters2(props) {
  const [open, setOpen] = useState(false);
  const { keyed, prefix } = useFilters3(props.label);
  return <Box><Typography>{prefix}: {Object.keys(keyed).length}</Typography><Shared3 label="filters2">item</Shared3><Button onClick={() => setOpen(!open)}>Toggle</Button></Box>;
}
export default Filters2;
