
import { useState } from "react";
import { Box, Button, Typography } from "@mui/material";

import { Shared11 } from "../../../shared/components/Shared11";
import { useFilters3 } from "../hooks/use-filters-3";
export function Filters10(props) {
  const [open, setOpen] = useState(false);
  const { keyed, prefix } = useFilters3(props.label);
  return <Box><Typography>{prefix}: {Object.keys(keyed).length}</Typography><Shared11 label="filters10">item</Shared11><Button onClick={() => setOpen(!open)}>Toggle</Button></Box>;
}
export default Filters10;
