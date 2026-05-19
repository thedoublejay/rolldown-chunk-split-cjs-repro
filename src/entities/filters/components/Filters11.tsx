
import { useState } from "react";
import { Box, Button, Typography } from "@mui/material";

import { Shared12 } from "../../../shared/components/Shared12";
import { useFilters4 } from "../hooks/use-filters-4";
export function Filters11(props) {
  const [open, setOpen] = useState(false);
  const { keyed, prefix } = useFilters4(props.label);
  return <Box><Typography>{prefix}: {Object.keys(keyed).length}</Typography><Shared12 label="filters11">item</Shared12><Button onClick={() => setOpen(!open)}>Toggle</Button></Box>;
}
export default Filters11;
