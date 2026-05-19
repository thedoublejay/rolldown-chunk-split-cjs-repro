
import { useState } from "react";
import { Box, Button, Typography } from "@mui/material";
import LegacyContainer4 from "../../../legacy/containers/LegacyContainer4";
import { Shared4 } from "../../../shared/components/Shared4";
import { useFilters4 } from "../hooks/use-filters-4";
export function Filters3(props) {
  const [open, setOpen] = useState(false);
  const { keyed, prefix } = useFilters4(props.label);
  return <Box><Typography>{prefix}: {Object.keys(keyed).length}</Typography><Shared4 label="filters3">item</Shared4><LegacyContainer4 title="filters-3" /><Button onClick={() => setOpen(!open)}>Toggle</Button></Box>;
}
export default Filters3;
