
import { useState } from "react";
import { Box, Button, Typography } from "@mui/material";

import { Shared9 } from "../../../shared/components/Shared9";
import { useFilters1 } from "../hooks/use-filters-1";
export function Filters8(props) {
  const [open, setOpen] = useState(false);
  const { keyed, prefix } = useFilters1(props.label);
  return <Box><Typography>{prefix}: {Object.keys(keyed).length}</Typography><Shared9 label="filters8">item</Shared9><Button onClick={() => setOpen(!open)}>Toggle</Button></Box>;
}
export default Filters8;
