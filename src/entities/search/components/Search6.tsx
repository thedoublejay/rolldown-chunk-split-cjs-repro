
import { useState } from "react";
import { Box, Button, Typography } from "@mui/material";
import LegacyContainer7 from "../../../legacy/containers/LegacyContainer7";
import { Shared7 } from "../../../shared/components/Shared7";
import { useSearch7 } from "../hooks/use-search-7";
export function Search6(props) {
  const [open, setOpen] = useState(false);
  const { keyed, prefix } = useSearch7(props.label);
  return <Box><Typography>{prefix}: {Object.keys(keyed).length}</Typography><Shared7 label="search6">item</Shared7><LegacyContainer7 title="search-6" /><Button onClick={() => setOpen(!open)}>Toggle</Button></Box>;
}
export default Search6;
