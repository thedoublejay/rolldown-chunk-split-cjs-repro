
import { useState } from "react";
import { Box, Button, Typography } from "@mui/material";

import { Shared5 } from "../../../shared/components/Shared5";
import { useFilters5 } from "../hooks/use-filters-5";
export function Filters4(props) {
  const [open, setOpen] = useState(false);
  const { keyed, prefix } = useFilters5(props.label);
  return <Box><Typography>{prefix}: {Object.keys(keyed).length}</Typography><Shared5 label="filters4">item</Shared5><Button onClick={() => setOpen(!open)}>Toggle</Button></Box>;
}
export default Filters4;
