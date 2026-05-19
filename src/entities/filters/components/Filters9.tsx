
import { useState } from "react";
import { Box, Button, Typography } from "@mui/material";
import LegacyContainer10 from "../../../legacy/containers/LegacyContainer10";
import { Shared10 } from "../../../shared/components/Shared10";
import { useFilters2 } from "../hooks/use-filters-2";
export function Filters9(props) {
  const [open, setOpen] = useState(false);
  const { keyed, prefix } = useFilters2(props.label);
  return <Box><Typography>{prefix}: {Object.keys(keyed).length}</Typography><Shared10 label="filters9">item</Shared10><LegacyContainer10 title="filters-9" /><Button onClick={() => setOpen(!open)}>Toggle</Button></Box>;
}
export default Filters9;
