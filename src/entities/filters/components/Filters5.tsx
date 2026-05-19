
import { useState } from "react";
import { Box, Button, Typography } from "@mui/material";

import { Shared6 } from "../../../shared/components/Shared6";
import { useFilters6 } from "../hooks/use-filters-6";
export function Filters5(props) {
  const [open, setOpen] = useState(false);
  const { keyed, prefix } = useFilters6(props.label);
  return <Box><Typography>{prefix}: {Object.keys(keyed).length}</Typography><Shared6 label="filters5">item</Shared6><Button onClick={() => setOpen(!open)}>Toggle</Button></Box>;
}
export default Filters5;
