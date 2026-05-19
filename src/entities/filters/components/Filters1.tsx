
import { useState } from "react";
import { Box, Button, Typography } from "@mui/material";

import { Shared2 } from "../../../shared/components/Shared2";
import { useFilters2 } from "../hooks/use-filters-2";
export function Filters1(props) {
  const [open, setOpen] = useState(false);
  const { keyed, prefix } = useFilters2(props.label);
  return <Box><Typography>{prefix}: {Object.keys(keyed).length}</Typography><Shared2 label="filters1">item</Shared2><Button onClick={() => setOpen(!open)}>Toggle</Button></Box>;
}
export default Filters1;
