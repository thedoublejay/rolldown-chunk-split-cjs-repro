
import { useState } from "react";
import { Box, Button, Typography } from "@mui/material";
import LegacyContainer13 from "../../../legacy/containers/LegacyContainer13";
import { Shared13 } from "../../../shared/components/Shared13";
import { useFilters5 } from "../hooks/use-filters-5";
export function Filters12(props) {
  const [open, setOpen] = useState(false);
  const { keyed, prefix } = useFilters5(props.label);
  return <Box><Typography>{prefix}: {Object.keys(keyed).length}</Typography><Shared13 label="filters12">item</Shared13><LegacyContainer13 title="filters-12" /><Button onClick={() => setOpen(!open)}>Toggle</Button></Box>;
}
export default Filters12;
